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
        profilePicture: user.profilePicture,
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
    let { email, password, firstName, lastName, username, profilePicture } =
      req.body;

    if (profilePicture === undefined && req.file) {
      profilePicture = req.file.path;
    } else if (profilePicture !== undefined && !req.file) {
      console.log('User is using a custom URL');
    } else {
      profilePicture =
        'https://i1.wp.com/wilcity.com/wp-content/uploads/2020/06/115-1150152_default-profile-picture-avatar-png-green.jpg?fit=820%2C860&ssl=1';
    }
    let passwordDigest = await middleware.hashPassword(
      password,
      process.env.SALT_ROUNDS
    );
    const user = await User.create({
      email,
      passwordDigest,
      firstName,
      lastName,
      username,
      profilePicture
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findOne({ where: { email: req.body.email } });
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
  } catch (error) {
    throw error;
  }
};

const CheckSession = async (req, res) => {
  const { payload } = res.locals;
  res.send(payload);
};

const DeleteUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email }
    });

    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      await user.destroy();
      return res.send({ message: 'Deleted this user!' });
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  } catch (error) {
    throw error;
  }
};

const UpdateProfilePic = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let updatedPhoto = await User.update(req.body, {
      where: { id: userId },
      returning: true
    });
    res.send(updatedPhoto);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Login,
  Register,
  UpdatePassword,
  DeleteUser,
  CheckSession,
  UpdateProfilePic
};
