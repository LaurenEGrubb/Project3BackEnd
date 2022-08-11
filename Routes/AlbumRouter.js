const Router = require('express').Router()
const controller = require('../Controllers/AlbumController')

Router.get('/', controller.GetAllAlbums)
Router.get('/:user_id', controller.GetUserAlbums)
Router.get('/:album_id', controller.GetAlbumDetails)
Router.post('/:user_id', controller.CreateAlbum)
Router.put('/:album_id', controller.UpdateAlbum)
Router.delete('/:album_id', controller.DeleteAlbum)

module.exports = Router
