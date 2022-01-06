'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todos', {
      id: {        
        type: Sequelize.INTEGER,     
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },          
      activity_group_id: {        
        type: Sequelize.INTEGER,
        references: {
          model: 'activities',
          key: 'id'
        },
        allowNull: false
      },
      title: {        
        type: Sequelize.STRING(200),
        allowNull: false
      },
      is_active: {        
        type: Sequelize.ENUM('0','1'),
        allowNull: false
      },
      priority: {        
        type: Sequelize.ENUM('very-high','high','medium','low','very-low'),
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
    await queryInterface.dropTable('todos');
  }
};
