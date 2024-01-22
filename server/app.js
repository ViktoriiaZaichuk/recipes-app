require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./app/routes/apiRoutes'); 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use helmet middleware
app.use(helmet());

// Routes
app.use('/', routes); 

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const { sequelize } = require('./models');

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });