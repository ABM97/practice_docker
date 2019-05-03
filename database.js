const Sequelize = require("sequelize");

var conString = process.env.DATABASE_URL;

// to be modified based on your local database
const db = new Sequelize(conString);

module.exports = db;
