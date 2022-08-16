// const util = require('util');
// const path = require('path');
// const multer = require('multer');
// const maxSize = 2 * 1024 * 1024;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const APP_SECRET = `${process.env.APP_SECRET}`;

// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   }
// });

// const uploadFile = multer({
//   storage: storage,
//   fileFilter: (req, file, callback) => {
//     if (
//       file.mimetype == 'image/png' ||
//       file.mimetype == 'image/jpeg' ||
//       file.mimetype == 'image/jpg'
//     ) {
//       callback(null, true);
//     } else {
//       console.log('only jpg & png file supported!');
//       callback(null, false);
//     }
//   },
//   limits: { fileSize: maxSize }
// }).single('photoUrl');

// const uploadFileMiddleware = util.promisify(uploadFile);

const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
};
const comparePassword = async (storedPassword, password) => {
  let passwordMatch = await bcrypt.compare(password, storedPassword);
  return passwordMatch;
};
const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET);
  return token;
};
const verifyToken = (req, res, next) => {
  const { token } = res.locals;
  let payload = jwt.verify(token, APP_SECRET);
  if (payload) {
    res.locals.payload = payload;

    return next();
  }
  res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
};

const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    if (token) {
      res.locals.token = token;
      return next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  }
};

module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword
  // uploadFileMiddleware,
  // uploadFile
};
