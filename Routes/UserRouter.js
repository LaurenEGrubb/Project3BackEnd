const Router = require('express').Router();
const controller = require('../Controllers/UserController');

Router.get('/', controller.getAllUsers);
Router.get('/:user_id', controller.getOneUser);
Router.post('/:user_id', controller.CreateUser);

module.exports = Router;
