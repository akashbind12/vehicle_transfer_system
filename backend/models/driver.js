const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Driver = sequelize.define('Driver', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_photo: {
    type: DataTypes.TEXT,
  },
});

module.exports = Driver;
