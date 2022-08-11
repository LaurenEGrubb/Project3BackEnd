const Router = require('express').Router();
const controller = require('../Controllers/AlbumController');

// Router.get('/', controller.GetAllAlbums)
// Router.get('/:Album_id', controller.GetAlbumDetails)
Router.post('/:Album_id', controller.CreateAlbum);
// Router.delete('/:Album_id', controller.DeleteAlbum)
// Router.put('/:Album_id', controller.UpdateAlbum)

module.exports = Router;
