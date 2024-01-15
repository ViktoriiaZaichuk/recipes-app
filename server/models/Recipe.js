const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Recipe extends Model {}

    Recipe.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'User',
              key: 'id',
            },
        },
        name: {
          type: DataTypes.STRING(250),
          allowNull: false,
          unique: true,
        },
        type: {
            type: DataTypes.STRING(50),
        },
        image: {
            type: DataTypes.STRING,
            validate : {
              notEmpty: true,
            },
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        instructions: {
            type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: 'Recipe',
      }
    );
    return Recipe;
};




