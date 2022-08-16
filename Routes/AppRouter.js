const Router = require('express').Router();
const UserRouter = require('./UserRouter');
const AlbumRouter = require('./AlbumRouter');
const PhotoRouter = require('./PhotoRouter');

Router.use('/users', UserRouter);
Router.use('/album', AlbumRouter);
Router.use('/photo', PhotoRouter);

module.exports = Router;
