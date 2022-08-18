// const multer = Multer({
//   storage: FirebaseStorage({
//     bucketName: 'albify-33264.appspot.com',
//     credentials: {
//       privatekey:
//         '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDhRQOjNovgSARt\ndqBgInfsDa3tMqU32NEYYu4hPJ1yEQMMOJdmE4RHzB96Uf8jSCPGP/yn+lLiTgpJ\naP7m7K0TN6PN7Chj2pKdG1hLwSI9Jwf8DNRKb/9wpxsl1pcncZ2P1TGb7mMembm5\nAukRKwCR0c2QQCFi3ySo1+dl87U10yBxgROlYywbKi7eUyTH1QuppLW1XJgENyAW\nPRlFH2TT2DQbvSgH3CWXPSqv0gAKyoWzfC6b3lOFbu5c7tRSAqstYoZKzA1BVmSp\nvMz+2+8GmViEw/ATLFErzcAfNVYjtGoPr0M3Rgo2t8Z2Z2i5ELAbI1tOLmf4MmbX\nBGRKmGWpAgMBAAECggEACHHhYod4yUDPOwP08YBT9ZCdDLosJm1QMrVWuak/j8H3\n1sfyU7HMm4fD8FPNmEGBPH0z7V99fEgHq7EuHnMQmUVUid4zX2xCDcteIoI21IsM\n32k4YM1VCqCWbHM1zxU7yQ4UIi/WyGlj5H3UReqnm/p9AHje/N63ovAWbSSB47wY\nnHBRIJaaZfN3ytQmYCiKjpU9PO9tURkbmIdB7hhRksOZ6xKaeK+ABa6hfdTmTl7L\nuQuTk9+qQlgPCRTygau7f+GNsFwGKGw1wGmGPlwj/DFm6m6V/1W7LQlyh1BW6vvb\nRRgN/paElhFGjvaDGks+82ya5i2/Awxb3IWFwk4uZwKBgQDwat3UMT+X6/EbfmBT\n7BZCs//RDBJF2GT5J3/rO7/wSXHo/M2ip9aifUBjo2fNy0X81MHB/2QXylEt4pKe\n/yhNPvf8uCiufGHqwKMMt6d9VLl7Sv+edCKeIl3Rq2RSlZbGxbs8ZLtFGFN1CBTj\nD5EPO5zNCt4ivHiTST0b61a3pwKBgQDv3s5ueYiIKUNHemvN9fXDKd5/0COwXVc6\nnK4Xt/enw2VNSnike7B7NyojX3SehIWMsJs0LNrYyvk1N+9c8Rbaqcuky5QEMOtJ\n3KwQsn1vNh1vPkyi1duJuoutJPgDKCDXchsFzOEZJX3nOiVcv9kBe5e/5tJX3yQa\nAUK2TYOiLwKBgQDQt/ZdgWP0QKHRfKWkNhIdVqeAlTpH6NXAeMpVLko0EY8S9maQ\nD6YG6zY7SmGUCCV6mjqccVw0SzCu5UTlRB948HHatQacdN+NLjBfmhGOfT+KClJg\n/fIP10YcAO/XwoZjisZCaDEsizHpKFr5xUnqL5axa/3tqjIDrFGhK27dgQKBgQCl\nDgOuMSKpzvrkrHCSALVj3eOkv2xPZ2smgbmpyIU5g1KppJzvUc1We9cbEAwHJ9ld\nvgiOFm9gzgo9fIfQxHSdckkW1J69Y4wD/zzHIIr/g5Utfwjs44t1ck+6jL28Lliq\n53GAxEIAM7Q27+PVto10X79D5WjH3lvRKRzmpN/3MQKBgQDOmP8DDVjQG3UGqjjn\nurkj4aOrl5AyFSlUZ60AoutrbP9avyzj3bYAm75BbQ3ti4CnztpLUbuRkDzK53pc\ngPoVsDpXRHVJlPIlyPCpq353xTLYINHnR/jTLUoIndwBQZzgLH1xeSDIU/HcRIf9\n6FgcvonyLu6OwFHum0aFy+u0dQ==\n-----END PRIVATE KEY-----\n',
//       clientEmail:
//         'firebase-adminsdk-6mll8@albify-33264.iam.gserviceaccount.com',
//       projectId: 'albify-33264'
//     },
//     public: true,
//     hooks: {
//       beforeUpload(req, file) {
//         file.originalname = Date.now() + file.originalname;
//         console.log(`before upload:`, file);
//       }
//     }
//   })
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: '1000000' },
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|gif/;
//     const mimetype = fileTypes.test(file.mimetype);
//     const extname = fileTypes.test(path.extname(file.originalname));

//     if (mimetype && extname) {
//       return cb(null, true);
//     }
//     cb('Give proper file format to upload');
//   }
// }).single('photoUrl');

// const uploadUserPic = multer({
//   storage: storage,
//   limits: { fileSize: '1000000' },
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|gif/;
//     const mimetype = fileTypes.test(file.mimetype);
//     const extname = fileTypes.test(path.extname(file.originalname));

//     if (mimetype && extname) {
//       return cb(null, true);
//     }
//     cb('Give proper file format to upload');
//   }
// }).single('profilePicture');

// module.exports = {
// upload,
// uploadUserPic
// };
