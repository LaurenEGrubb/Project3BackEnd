// const uploadFile = require('../middleware/index');
const multer = require('multer');
const path = require('path');
// const fs = require('fs');
// const baseUrl = 'http://localhost:3001/api/file/';
const { Photo } = require('../models/photo');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images');
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Give proper file format to upload');
  }
}).single('photoUrl');

// try {
//   await uploadFile(req, res);
//   console.log(req);
//   if (req.file == undefined) {
//     return res.status(400).send({ message: 'Please upload a file!' });
//   }
//   if (req.file) {
//     Photo.photoUrl = req.file.path;
//     res.status(200).send({
//       message: 'Uploaded the file successfully: ' + Photo.photoUrl
//     });
//   }
// } catch (err) {
//   console.log(err);

//   if (err.code == 'LIMIT_FILE_SIZE') {
//     return res.status(500).send({
//       message: 'File size cannot be larger than 2MB!'
//     });
//   }

//   res.status(500).send({
//     message: `Could not upload the file: ${req.file.originalname}. ${err}`
//   });
// }
// }

const getListFiles = (req, res) => {
  const directoryPath = __basedir + '/resources/static/assets/uploads/';
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: 'Unable to scan files!'
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file
      });
    });
    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + '/resources/static/assets/uploads/';
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: 'Could not download the file. ' + err
      });
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  download
};
