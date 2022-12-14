const { Photo } = require('../models')

const GetPhotoDetails = async (req, res) => {
  try {
    let photoId = parseInt(req.params.photo_id)
    let photoDetails = await Photo.findAll({ where: { id: photoId } })
    res.send(photoDetails)
  } catch (error) {
    throw error
  }
}
const DeletePhoto = async (req, res) => {
  try {
    let photoId = parseInt(req.params.photo_id)
    await Photo.destroy({ where: { id: photoId } })
    res.send({ message: `Deleted Photo with an ID of ${photoId}!` })
  } catch (error) {
    throw error
  }
}

const CreatePhoto = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    let photoBody = {
      photoUrl: req.file.path,
      name: req.body.name,
      description: req.body.description,
      albumId: albumId
    }
    let photo = await Photo.create(photoBody)
    res.send(photo)
  } catch (error) {
    throw error
  }
}

const UpdatePhoto = async (req, res) => {
  try {
    let photoId = parseInt(req.params.photo_id)
    let updated = await Photo.update(req.body, {
      where: { id: photoId },
      returning: true
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPhotoDetails,
  CreatePhoto,
  DeletePhoto,
  UpdatePhoto
}
