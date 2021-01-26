require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const limiter = require('./middlewares/rateLimit');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes/index');
const { response } = require('express');
const db = require('./db');
const Course = db.course;


const course = require('./db/controllers/course');

const corsOptions = {
  origin: [
    'http://localhost:8080',
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

// const { NODE_ENV, BASE_URL } = process.env;
const { PORT = 3000 } = process.env;

const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('*', cors(corsOptions));
app.use('/', routes);

app.use(errorLogger);

app.use(errors());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
app.use(requestLogger);
