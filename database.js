const Sequelize = require("sequelize");

let db;
// Docker version
if (process.env.DATABASE_URL) {
  db = new Sequelize("practicedocker", "postgres", "z", {
    dialect: "postgres",
    host: "db",
    logging: false
  });
} else {
  // localhost version
  db = new Sequelize("practicedocker", "abdallah", "z", {
    dialect: "postgres",
    host: "localhost",
    logging: false
  });
}

module.exports = db;
