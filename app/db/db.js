const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log("Successfully connected to the database.");
});

module.exports = connection;
