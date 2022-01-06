'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activities', {
      id: {        
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },          
      email: {        
        type: Sequelize.STRING(100),
        references: {
          model: 'users',
          key: 'email'
        },   
        allowNull: false
      },
      title: {        
        type: Sequelize.STRING(100),
        allowNull: false
      },
      created_at: {        
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {        
        type: Sequelize.DATE
      },
      deleted_at: {        
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('activities');
  }
};
