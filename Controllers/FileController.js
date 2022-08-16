const multer = require('multer');
const path = require('path');

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

const uploadUserPic = multer({
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
}).single('profilePicture');

// const getListFiles = (req, res) => {
//   const directoryPath = __basedir + '/resources/static/assets/uploads/';
//   fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//       res.status(500).send({
//         message: 'Unable to scan files!'
//       });
//     }
//     let fileInfos = [];
//     files.forEach((file) => {
//       fileInfos.push({
//         name: file,
//         url: baseUrl + file
//       });
//     });
//     res.status(200).send(fileInfos);
//   });
// };

// const download = (req, res) => {
//   const fileName = req.params.name;
//   const directoryPath = __basedir + '/resources/static/assets/uploads/';
//   res.download(directoryPath + fileName, fileName, (err) => {
//     if (err) {
//       res.status(500).send({
//         message: 'Could not download the file. ' + err
//       });
//     }
//   });
// };

module.exports = {
  upload,
  uploadUserPic
  // getListFiles,
  // download
};
