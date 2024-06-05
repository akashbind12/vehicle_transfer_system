const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// const User = require('./User');
// const Candidate = require('./Candidate');

// const Vote = sequelize.define('Vote', {});

// Vote.belongsTo(User);
// Vote.belongsTo(Candidate);

// module.exports = Vote;

const Driver = require('./driver');
const Vehicle = require('./vehicle');

const TransferHistory = sequelize.define('TransferHistory', {
  vehicle_number: {
    type: DataTypes.STRING,
    references: {
      model: Vehicle,
      key: 'vehicle_number',
    },
  },
  from_driver_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Driver,
      key: 'id',
    },
  },
  to_driver_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Driver,
      key: 'id',
    },
  },
  transfer_date: {
    type: DataTypes.DATE,
    defaultValue: sequelize.NOW,
  },
});

module.exports = TransferHistory;
