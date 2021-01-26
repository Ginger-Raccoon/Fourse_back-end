const router = require('express').Router();
const express = require('express');
const multer  = require('multer');
const path = require('path');
const photo = require('../db/controllers/photo');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype !== 'image/jpeg'){
      return cb('Invalid image format');
    } else {
      return cb(null, 'images');
    }
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now() + '-' + file.originalname);
  }
});


const upload = multer({ storage: storage });
router.use(express.static(path.join(__dirname, '../images')));
console.log(upload.single);

router.post('/', upload.single('photo'), photo.uploadPhoto);



module.exports = router;