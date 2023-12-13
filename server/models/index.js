const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const config = require('../config/config');

const sequelize = new Sequelize({  
    ...config.development,
    dialect: process.env.DB_DIALECT, 
});

const db = {};

// Load models dynamically
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associate models if needed
Object.values(db)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(db));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;