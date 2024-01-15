const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}

    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING(250),
          allowNull: false,
          unique: true,
        },
        avatar: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password_reset_token: {
            type : DataTypes.STRING,
            allowNull: true,
        },
        reset_token_expiration: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'User',
      }
    );
    return User;
};




