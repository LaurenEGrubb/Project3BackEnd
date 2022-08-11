const { Album } = require('../models')
const album = require('../models/album')

const GetAllAlbums = async (req, res) => {
  try {
    let albums = await album.findAll({})
    res.send(albums)
  } catch (error) {
    throw error
  }
}

const GetAlbumDetails = async (req, res) => {
  try {
    const album = await album.findByPk(req.params.album_id)
    res.send(album)
  } catch (error) {
    throw error
  }
}
const DeleteAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    await album.destroy({ where: { id: albumId } })
    res.send({ message: `Deleted album with an ID of ${albumId}!` })
  } catch (error) {
    throw error
  }
}

const CreateAlbum = async (req, res) => {
  try {
    let teamId = parseInt(req.params.team_id)
    let albumBody = {
      ...req.body,
      teamId
    }
    let album = await album.create(albumBody)
    res.send(album)
  } catch (error) {
    throw error
  }
}
const UpdateAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    let updated = await album.update(req.body, {
      where: { id: albumId },
      returning: true
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}

module.exports = {
  // GetAllAlbums,
  // GetAlbumDetails,
  CreateAlbum
  // DeleteAlbum,
  // UpdateAlbum
}
