const db = require("./db_config");

const sql = `CREATE TABLE try_it (
    id int not null auto_increment,
    name varchar(50) not null,
    address varchar(255),
    primary key(id)
)`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("table created");
});
