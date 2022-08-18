const Router = require('express').Router();
const controller = require('../Controllers/AlbumController');
const middleware = require('../middleware');
// const FileController = require('../Controllers/FileController');

Router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllAlbums
);
Router.get(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserAlbums
);
Router.get(
  '/details/:album_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAlbumPhotos
);
// Router.post(
//   '/:user_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.CreateAlbum
// );

Router.put(
  '/:album_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateAlbum
);

Router.delete(
  '/:album_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteAlbum
);

module.exports = Router;
