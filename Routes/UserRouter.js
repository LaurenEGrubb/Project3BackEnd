const Router = require('express').Router();
const UserController = require('../Controllers/UserController');
const middleware = require('../middleware')
const AuthController = require('../Controllers/AuthController')

 Router.post('/login', AuthController.Login)
 Router.get('/', UserController.getAllUsers);
 Router.get('/:user_id', UserController.getOneUser);
 Router.post('/:user_id', UserController.CreateUser);

Router.post('/register', AuthController.Register)
Router.get('/session',
    middleware.stripToken,
    middleware.verifyToken,
    AuthController.CheckSession
   )
  
module.exports = Router;
//comment//