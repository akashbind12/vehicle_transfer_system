'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("students","department_id", {
      type : Sequelize.DataTypes.INTEGER,
      defaultValue : null,
      references : {
        model : "departments",
        key : "id"
      }
     })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("students","department_id")
  }
};
