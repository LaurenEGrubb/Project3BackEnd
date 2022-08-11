const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AlbumRouter = require('./AlbumRouter')
// const PhotoRouter = require('./PhotoRouter');

<<<<<<< HEAD
Router.use('/users', UserRouter);

// Router.use('/:user_id/album', AlbumRouter);
=======
Router.use('/users', UserRouter)
Router.use('/album', AlbumRouter)
>>>>>>> 993afb2bce3cb100fcdfc8a13ec6a8d8a91edadd

module.exports = Router
