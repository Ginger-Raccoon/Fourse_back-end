const { Sequelize } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('group', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
    },
  },{
      timestamps: false
  })
}