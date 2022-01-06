'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      email: {
        type: Sequelize.STRING(100),        
        unique: true,
        primaryKey: true,
        allowNull: false
      },
      password: {      
        type: Sequelize.STRING(200),
        allowNull: false
      },
      created_at: {        
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {        
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
