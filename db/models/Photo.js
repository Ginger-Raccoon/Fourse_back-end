const { Sequelize } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('photo', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    photo: {
      type: Sequelize.TEXT,
    },
    main: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
      timestamps: false
  })
}
