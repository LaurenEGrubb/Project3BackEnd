const { Album } = require('../models')

const GetAllAlbums = async (req, res) => {
  try {
    let albums = await Album.findAll({})
    res.send(albums)
  } catch (error) {
    throw error
  }
}
const GetUserAlbums = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let albums = await Album.findAll({ where: { userId: userId } })
    res.send(albums)
  } catch (error) {
    throw error
  }
}

const GetAlbumDetails = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    await Album.findByPk({ where: { id: albumId } })
    res.send(albumId)
  } catch (error) {
    throw error
  }
}
const DeleteAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    await Album.destroy({ where: { id: albumId } })
    res.send({ message: `Deleted album with an ID of ${albumId}!` })
  } catch (error) {
    throw error
  }
}

const CreateAlbum = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let albumBody = {
      ...req.body,
      userId
    }
    let album = await Album.create(albumBody)
    res.send(album)
  } catch (error) {
    throw error
  }
}
const UpdateAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    let updated = await Album.update(req.body, {
      where: { id: albumId },
      returning: true
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllAlbums,
  GetAlbumDetails,
  CreateAlbum,
  DeleteAlbum,
  UpdateAlbum,
  GetUserAlbums
}
