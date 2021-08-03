require('dotenv').config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: 
  user:
  password: 
  database: 
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connection to database works!");
});

module.exports = db;
