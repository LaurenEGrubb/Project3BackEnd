const Router = require('express').Router()
const controller = require('../Controllers/PhotoController')

// Router.get('/', controller.GetAllPhotos)
// Router.get('/:user_id', controller.GetUserPhotos)
Router.get('/:photo_id', controller.GetPhotoDetails)
Router.post('/:album_id', controller.CreatePhoto)
Router.put('/:photo_id', controller.UpdatePhoto)
Router.delete('/:photo_id', controller.DeletePhoto)

module.exports = Router
