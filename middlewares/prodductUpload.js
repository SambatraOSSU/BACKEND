const path = require("path");
const multer = require("multer");

//pour stocker le fichier
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "product_files_upload/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
//pour télécharger l' image
let productUpload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    const allowedImageTypes = [
      "image/jpeg",
      "image/png",
      "image/bmp",
      "image/tiff",
      "image/webp",
      "image/jpg",
    ];

    if (allowedImageTypes.includes(file.mimetype)) {
      console.log("Fichier sauvegardé");
      callback(null, true);
    } else {
      console.log("Erreur de format");
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5, //5mb
  },
});

module.exports = productUpload;