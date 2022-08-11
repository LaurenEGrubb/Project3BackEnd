const { User } = require('../models');

const CreateUser = async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async (req, res) => {
  try {
    let allUsers = await User.findAll();
    res.send(allUsers);
  } catch (error) {
    throw error;
  }
};

const updateUser = async (req, res) => {
  try {
    let userId = req.params.user_id;
    let updatedUser = await User.update(req.body, {
      where: {
        id: userId
      }
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    await User.destroy({ where: { id: userId } });
    res.send({ message: 'This user was deleted!!!' });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateUser,
  getAllUsers,
  updateUser,
  deleteUser
};
