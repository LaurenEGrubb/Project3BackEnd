const { User } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    let allUsers = await User.findAll()
    res.send(allUsers)
  } catch (error) {
    throw error
  }
}

const getOneUser = async (req, res) => {
  try {
    let user = await User.findByPk(req.params.user_id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  try {
    let userId = req.params.user_id
    let updatedUser = await User.update(req.body, {
      where: {
        id: userId
      }
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getOneUser,
  getAllUsers,
  updateUser
}
