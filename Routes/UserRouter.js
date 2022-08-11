const Router = require('express').Router();
const controller = require('../Controllers/UserController');

Router.get('/', controller.getAllUsers);
Router.post('/user', controller.CreateUser);

module.exports = Router;
