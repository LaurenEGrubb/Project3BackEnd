const { User } = require('../models');
const middleware = require('../middleware');

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    });
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email
      };
      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  } catch (error) {
    throw error;
  }
};

const Register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, username } = req.body;
    let passwordDigest = await middleware.hashPassword(password);
    const user = await User.create({
      email,
      passwordDigest,
      firstName,
      lastName,
      username
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findByPk(req.params.user_id);
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword);
      await user.update({ passwordDigest });
      return res.send({ status: 'Ok', payload: user });
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  } catch (error) {}
};

const CheckSession = async (req, res) => {
  const { payload } = res.locals;
  res.send(payload);
};

const deleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    await User.destroy({ where: { id: userId } });
    res.send({ message: 'Deleted this user!' });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Login,
  Register,
  UpdatePassword,
  deleteUser
  //CheckSession
};
