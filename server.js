const { Album, Photo, User } = require('./models')
const middleware = require('./middleware')
const Multer = require('multer')
const FirebaseStorage = require('multer-firebase-storage')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const admin = require('firebase-admin')
require('dotenv').config()

const app = express()
const AppRouter = require('./Routes/AppRouter')
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const multer = Multer({
  storage: FirebaseStorage({
    bucketName: 'albify-33264.appspot.com',
    credentials: {
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: 'albify-33264'
    },
    public: true,
    hooks: {
      beforeUpload(req, file) {
        file.originalname = Date.now() + file.originalname
        console.log(`before upload:`, file)
      }
    }
  })
})

// add image to create new album

app.post('/add-image/:user_id', multer.single('photoUrl'), async (req, res) => {

  let userId = parseInt(req.params.user_id)
  let albumBody = {
    photoUrl: req.file.publicUrl,
    name: req.body.name,
    description: req.body.description,
    userId: userId
  }
  let album = await Album.create(albumBody)
  res.send(album)
})

// add image to create new photo post

app.post(
  '/add-image/photo/:album_id',
  multer.single('photoUrl'),
  async (req, res) => {
    let albumId = parseInt(req.params.album_id)
    let photoBody = {
      photoUrl: req.file.publicUrl,
      name: req.body.name,
      description: req.body.description,
      albumId: albumId
    }
    let photo = await Photo.create(photoBody)
    res.send(photo)
  }
)

// add image to profilePicture

app.post('/add-image', multer.single('profilePicture'), async (req, res) => {
  try {
    let { email, password, firstName, lastName, username, profilePicture } =
      req.body
    if (profilePicture === undefined && req.file) {
      profilePicture = req.file.publicUrl
    } else if (profilePicture !== undefined && !req.file) {
      console.log('User is using a custom URL')
    } else {
      profilePicture =
        'https://i1.wp.com/wilcity.com/wp-content/uploads/2020/06/115-1150152_default-profile-picture-avatar-png-green.jpg?fit=820%2C860&ssl=1'
    }
    let passwordDigest = await middleware.hashPassword(
      password,
      process.env.SALT_ROUNDS
    )
    const user = await User.create({
      email,
      passwordDigest,
      firstName,
      lastName,
      username,
      profilePicture
    })
    res.send(user)
  } catch (error) {
    throw error
  }
})

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
