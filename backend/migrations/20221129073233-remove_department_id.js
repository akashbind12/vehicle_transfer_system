'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.removeColumn('students', 'department_id');
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('students', 'department_id');
  }
};
