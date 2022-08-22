const Router = require('express').Router()
const UserController = require('../Controllers/UserController')
const middleware = require('../middleware')
const AuthController = require('../Controllers/AuthController')

Router.post('/login', AuthController.Login)
Router.get('/', UserController.getAllUsers)
Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  AuthController.CheckSession
)

Router.put(
  '/:user_id/profilepic',
  middleware.stripToken,
  middleware.verifyToken,
  AuthController.UpdateProfilePic
)

Router.get('/:user_id', UserController.getOneUser)

Router.put(
  '/updatepassword',
  middleware.stripToken,
  middleware.verifyToken,
  AuthController.UpdatePassword
)

Router.delete(
  '/delete',
  middleware.stripToken,
  middleware.verifyToken,
  AuthController.DeleteUser
)

Router.get('/:user_id', UserController.getOneUser)
module.exports = Router
