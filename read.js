const db = require("./db_config");

const sql = "select * from try_it";

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});
