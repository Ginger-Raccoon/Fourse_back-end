require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const limiter = require('./middlewares/rateLimit');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes/index');
const test = require('./middlewares/test');
const { response } = require('express');
const db = require('./db');
const Course = db.course;


const course = require('./db/controllers/course');

const corsOptions = {
  origin: [
    'http://localhost:8080',
    'https://api.raccoondiploma.ml',
    'https://www.api.raccoondiploma.ml',
    'https://ginger-raccoon.github.io',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: [
    'Content-Type',
    'origin',
    'x-access-token',
  ],
  credentials: true,
};

const { NODE_ENV, BASE_URL } = process.env;



const { PORT = 3000 } = process.env;

const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/getCourses', course.getCourses)
app.get('/getCourse/:name', course.getCourse)
app.post('/createCourse', course.createCourse)
app.patch('/updateCourse/:id', course.updateCourse)
app.delete('/deleteCourse/:id', course.deleteCourse)


// app.get('/gettest', (req, res) => {
//   test.test()
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })

// app.post('/pushtest', test.testInsert)

// app.delete('/deletetest/:c_no', (req, res) => {
//   console.log(req.params.c_no);
//   test.testDelete(req.params.c_no)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     console.log(error);
//     res.status(500).send(error);
//   })
// })

// app.patch('/updatetest/:c_no', (req, res) => {
//   console.log(req.body);
//   test.testUpdate(req.body)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })


app.use('*', cors(corsOptions));
// app.use(router);

app.use(errorLogger);

app.use(errors());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
app.use(requestLogger);
