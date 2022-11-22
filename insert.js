const db = require("./db_config");

const sql = `INSERT INTO try_it (name, address)
VALUES ('Aldi', 'Di sini ajah')`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});
