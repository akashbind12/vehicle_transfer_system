const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Vehicle = sequelize.define('Vehicle', {
  vehicle_number: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  vehicle_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  puc_certificate: {
    type: DataTypes.TEXT,
  },
  insurance_certificate: {
    type: DataTypes.TEXT,
  },
});

module.exports = Vehicle;
