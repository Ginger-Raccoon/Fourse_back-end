const router = require('express').Router();
const { celebrate, Joi, errors } = require('celebrate');
const { login, createUser, unlogin } = require('../controllers/users');
const { requestLogger, errorLogger } = require('../middlewares/logger');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');
const errorHandler = require('../middlewares/errorHandler');
const courses = require('./courses');


// чтобы на стороне сервера multer мог подхватить загруженный файл, у формы атрибут enctype должен иметь значение multipart/form-data.

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

// router.use(requestLogger);
// router.post('/signin', celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().email().required().pattern(/[a-z0-9]+([\w]+\.)*([\w]+-)*([\w])*([a-z0-9]@)[\w-]+(\.[\w-]+)*\.[a-z]+|([a-z0-9]@)[\w-]+(\.[\w-]+)*\.[a-z]+/),
//     password: Joi.string().trim().min(5).required(),
//   }),
// }), login);

// router.post('/signup', celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().email().required().pattern(/[a-z0-9]+([\w]+\.)*([\w]+-)*([\w])*([a-z0-9]@)[\w-]+(\.[\w-]+)*\.[a-z]+|([a-z0-9]@)[\w-]+(\.[\w-]+)*\.[a-z]+/),
//     password: Joi.string().trim().min(5).required(),
//     name: Joi.string().min(2).max(30).required(),
//   }),
// }), createUser);

// router.use('/articles', auth, require('./articles'));
// router.use('/users', auth, require('./users'));

// router.post('/exit', auth, unlogin);

router.use('/courses', require('./courses'));
router.use('/photos', require('./photos'));

router.use('/', errorHandler);
router.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

router.use(errorLogger);
router.use(errors());

module.exports = router;
