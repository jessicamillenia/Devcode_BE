module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    id: {        
        type: DataTypes.INTEGER,     
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: {        
        type: DataTypes.STRING(200),
        allowNull: false
    },
    is_active: {        
        type: DataTypes.ENUM('0','1'),
        allowNull: false
    },
    priority: {        
        type: DataTypes.ENUM('very-high','high','medium','low','very-low'),
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
    tableName: 'todos',
    timestamps: false
  });
  
  Todo.associate = function(models) {
    Todo.belongsTo(models.Activity, {
        foreignKey: {
          name: 'activity_group_id',
          type: DataTypes.INTEGER,
          allowNull: false
        }
    });
  };

  return Todo;
};
