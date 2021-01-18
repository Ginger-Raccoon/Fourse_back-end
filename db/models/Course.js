const validator = require('validator');
const { Sequelize } = require('sequelize');


module.exports = function(sequelize) {
  return sequelize.define('course', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    s_info: {
      type: Sequelize.STRING,
    },
    l_info: {
      type: Sequelize.STRING,
    },
    owner: {
      type: Sequelize.STRING,
    },
    link: {
      type: Sequelize.TEXT,
      validate: {
        validator(link) {
          return validator.isURL(link);
        },
      },
    },
  }, {
    timestamps: false
  })
}


