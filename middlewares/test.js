const db = require('../db');
const Course = db.course;
const CourseGroup = db.courseGroup;
const Group = db.group;
const Photo = db.photo

module.exports.testInsert = (req, res, next) => {
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

// const Pool = require("pg").Pool; // импорт postegreSQL

// const pool = new Pool ({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'test',
//   password: 'shkeeper',
//   port: 5432,
// });

// module.exports.test = () => {
//   return new Promise(function(resolve, reject) {
//     pool.query('SELECT * FROM courses', (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(results.rows);
//     })
//   })
// }

// module.exports.testInsert = (body) => {
//   return new Promise(function(resolve, reject) {
//     const {c_no, title, hours} = body
//     pool.query('INSERT INTO courses (c_no, title, hours) VALUES ($1, $2, $3) RETURNING *', [c_no, title, hours], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       console.log(results.rows[0]);
//       resolve(`A new courses has been added: ${results.rows[0].c_no}, ${results.rows[0].title}`)
//       })
//   })
// }

// module.exports.testDelete = (id) => {
//   return new Promise(function(resolve, reject) {
//     console.log(id);
//     pool.query('DELETE FROM courses WHERE c_no = $1', [id], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`Courses deleted with ID: ${id}`)
//     })
//   })
// }

// module.exports.testUpdate = (body) => {
//   return new Promise(function(resolve, reject) {
//     const {c_no, title, hours} = body
//     pool.query('UPDATE courses SET title = $2, hours = $3 WHERE c_no = $1', [c_no, title, hours], (error, results) => {
//       if (error) {
//         console.log(error);
//         reject(error)
//       }
//       console.log(results);
//       resolve(`Course  has been added`)
//       })
//   })
// }