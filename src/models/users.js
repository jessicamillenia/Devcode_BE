"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING(100),        
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    password: {      
        type: DataTypes.STRING(200),
        allowNull: false
    },
    created_at: {        
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {        
        type: DataTypes.DATE
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
  
  User.associate = function(models) {
    User.hasMany(models.Activity, {
      foreignKey: {
        name: 'email',
        type: DataTypes.STRING(100),
        allowNull: false
      }    
    });
  };

  return User;
};
