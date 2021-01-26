// импорт Sequelize
const { Sequelize } = require('sequelize');
// подключение к БД postgres
const sequelize = new Sequelize('Fourse', 'postgres', 'shkeeper',
  {
    dialect: "postgres",
    host: "localhost"
  })
// импорт моделей таблицы Course
  const Course = require('./models/Course')(sequelize);
  const Photo = require('./models/Photo')(sequelize);
  const CourseGroup = require('./models/CourseGroup')(sequelize);
  const Group = require('./models/Group')(sequelize);

  module.exports = {
    sequelize: sequelize,
    course: Course,
    photo: Photo,
    group: Group,
    courseGroup: CourseGroup,
  }
//--------------------------------------------------------------------------------------------------------
  //foreign keys's
Course.hasMany(Photo);
Course.hasMany(CourseGroup);

Photo.belongsTo(Course, {
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  name: 'courses_id',
});

Group.belongsTo(Group, {
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  name: 'parent',
});
Group.hasMany(Group);
Group.hasMany(CourseGroup);

CourseGroup.belongsTo(Course, {
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  name: 'course_id',
});
CourseGroup.belongsTo(Group, {
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  name: 'group_id',
});
// --------------------------------------------------------------------------------------------------------
// синхронизация таблиц в бд
  // sequelize.sync({ force: true }).then(() => {
  //   Course.create({
  //     name: "test",
  //     s_info: "small test",
  //     l_info: "large test",
  //     owner: "raccoon",
  //     link: "test link"
  //   })
  // })
  // .catch((error) => console.log(error));