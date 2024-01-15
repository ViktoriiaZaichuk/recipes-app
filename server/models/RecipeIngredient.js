const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RecipeIngredient extends Model {}

    RecipeIngredient.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Recipe',
              key: 'id',
            },
        },
        ingredient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Ingredient',
              key: 'id',
            },
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Measure',
              key: 'id',
            },
        },
      },
      {
        sequelize,
        modelName: 'RecipeIngredient',
      }
    );
    return RecipeIngredient;
};




