const db = require('../../db');

const Photo = db.photo;

module.exports.uploadPhoto = (req, res, next) => {
  Photo.create({
    photo: req.file.path
  })
  .then(() => res.send(req.file.path))
  .catch((err) => console.log(err))
}