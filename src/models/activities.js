"use strict";

module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('activity', {
    id: {        
        type: DataTypes.INTEGER,     
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },          
    email: {        
        type: DataTypes.STRING(100),
        references: {
        model: 'users',
        key: 'email'
        },   
        allowNull: false
    },
    title: {        
        type: DataTypes.STRING(100),
        allowNull: false
    },
    created_at: {        
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {        
        type: DataTypes.DATE
    },
    deleted_at: {        
        type: DataTypes.DATE
    }
  }, {
    tableName: 'activities',
    timestamps: false
  });
  
  Activity.associate = function(models) {
    Activity.hasOne(models.User, {
      foreignKey: {
        name: 'email',
        type: DataTypes.STRING(100),
        allowNull: false
      }    
    });
    Activity.hasMany(models.Todo, {
        foreignKey: {
          name: 'activity_group_id',
          type: DataTypes.INTEGER,
          allowNull: false
        }
    });
  };

  return Activity;
};
