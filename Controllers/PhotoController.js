const { Photo } = require('../models')

// const GetAllPhotos = async (req, res) => {
//   try {
//     let photos = await Photo.findAll({})
//     res.send(photos)
//   } catch (error) {
//     throw error
//   }
// }
// const GetalbumPhotos = async (req, res) => {
//   try {
//     let albumId = parseInt(req.params.album_id)
//     let photos = await Photo.findAll({ where: { albumId: albumId } })
//     res.send(photos)
//   } catch (error) {
//     throw error
//   }
// }

// const GetPhotoDetails = async (req, res) => {
//   try {
//     let photoId = parseInt(req.params.photo_id)
//     await Photo.findByPk({ where: { id: photoId } })
//     res.send(photoId)
//   } catch (error) {
//     throw error
//   }
// }
// const DeletePhoto = async (req, res) => {
//   try {
//     let photoId = parseInt(req.params.Photo_id)
//     await photo.destroy({ where: { id: PhotoId } })
//     res.send({ message: `Deleted Photo with an ID of ${photoId}!` })
//   } catch (error) {
//     throw error
//   }
// }

const CreatePhoto = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    let photoBody = {
      ...req.body,
      albumId: albumId
    }
    let photo = await Photo.create(photoBody)
    res.send(photo)
  } catch (error) {
    throw error
  }
}
// const UpdatePhoto = async (req, res) => {
//   try {
//     let photoId = parseInt(req.params.photo_id)
//     let updated = await Photo.update(req.body, {
//       where: { id: photoId },
//       returning: true
//     })
//     res.send(updated)
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  // GetAllPhotos,
  // GetPhotoDetails,
  CreatePhoto
  // DeletePhoto,
  // UpdatePhoto,
  // GetalbumPhotos
}
