const Router = require('express').Router();
const controller = require('../Controllers/PhotoController');
const middleware = require('../middleware');
const FileController = require('../Controllers/FileController');

// Router.get('/', controller.GetAllPhotos)
// Router.get('/:user_id', controller.GetUserPhotos)
Router.get(
  '/:photo_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetPhotoDetails
);
Router.post(
  '/:album_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  FileController.upload,
  controller.CreatePhoto
);
Router.put(
  '/:photo_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePhoto
);
Router.delete(
  '/:photo_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePhoto
);

module.exports = Router;
