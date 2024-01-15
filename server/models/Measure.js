const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Measure extends Model {}

    Measure.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Measure',
      }
    );
    return Measure;
};




