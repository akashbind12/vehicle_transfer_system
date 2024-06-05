const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vehical_transfter_system', "root", "AKbind@12", {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
