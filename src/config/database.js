require('dotenv').config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user:"harlyqueen",
  password: "skjc4 $e* 5efD&(5aef5]DAds5",
  database: "rendezVous",
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connection to database works!");
});

module.exports = db;
