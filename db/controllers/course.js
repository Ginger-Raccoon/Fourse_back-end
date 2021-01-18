const db = require('../../db');
const Course = db.course;


module.exports.createCourse = (req, res, next) => {
  const body = req.body;
    Course.create({
      name: body.name,
      s_info: body.s_info,
      l_info: body.l_info,
      owner: body.owner,
      link: body.link,
    })
    .then((courses) => res.send({ data: courses }))
    .catch((err) => {
      next(err);
    });
};

module.exports.getCourses = (req, res) => {
Course.findAll()

  .then((courses) => res.send({data: courses}))
  .catch((err) => {
    console.log(err);
  });
};

module.exports.getCourse = (req, res) => {
  Course.findAll({
    where: {
      name: req.params.name
    }
  })
  .then((course) => res.send({data: course}))
  .catch((err) => console.log(err));
}

module.exports.updateCourse = (req, res) => {
  const body = req.body
  Course.update({
    name: body.name,
    s_info: body.s_info,
    l_info: body.l_info,
    owner: body.owner,
    link: body.link
  }, {
    where: {
      id: body.id
    }
  })
  .then(() => res.send(body))
  .catch((err) => console.log(err))
}

module.exports.deleteCourse = (req, res) => {
  Course.destroy({
    where: {
      id: req.params.id
    }
  })
}
