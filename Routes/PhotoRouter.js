const Router = require('express').Router()
const controller = require('../Controllers/PhotoController')
const middleware = require('../middleware')

Router.get(
  '/:photo_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetPhotoDetails
)

Router.put(
  '/:photo_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePhoto
)
Router.delete(
  '/:photo_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePhoto
)

module.exports = Router
