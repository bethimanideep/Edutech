const { Sequelize } = require('sequelize');
require('dotenv').config
const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host=process.env.DB_HOST

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect:'mysql'
});
module.exports={
    sequelize
}