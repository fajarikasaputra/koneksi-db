const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_db",
});

db.connect(function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Connected to Database");
  }
});

module.exports = db;
