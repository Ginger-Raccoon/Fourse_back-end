const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const course = require('../db/controllers/course');

router.get('/', course.getCourses)

router.get('/:name', course.getCourse)

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    s_info: Joi.string().required(),
    l_info: Joi.string().required(),
    owner: Joi.string().required(),
    link: Joi.string().required().pattern(/(https?:\/\/)(www\.)?[a-z0-9]((\.\w)|([a-z0-9-_]))*\.([a-z]\/?){2,}(\w+\/?)*(:[1-9]\d{1,3}\/?)*|(https?:\/\/)(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)(:[1-9]\d{2,3})?(\/[\w]*)*\/?#?/),
  }),
}), course.createCourse)
router.patch('/:id', course.updateCourse)
router.delete('/:id', course.deleteCourse)

module.exports = router;