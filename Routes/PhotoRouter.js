const Router = require('express').Router()
const controller = require('../Controllers/PhotoController')

// Router.get('/', controller.GetAllPhotos)
// Router.get('/:user_id', controller.GetUserPhotos)
// Router.get('/:Photo_id', controller.GetPhotoDetails)
Router.post('/:album_id', controller.CreatePhoto)
// Router.put('/:Photo_id', controller.UpdatePhoto)
// Router.delete('/:Photo_id', controller.DeletePhoto)

module.exports = Router
