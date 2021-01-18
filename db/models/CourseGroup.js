const { Sequelize } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('courseGroup', {
  },
  {
      timestamps: false
  })
}



