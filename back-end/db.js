const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
console.log('PASS :',process.env.DB_PASS);

connection.connect((err) => {
  if (err) {
    console.error('CONNECTION ERROR: ', err.stack);
    return;
  }
  console.log('CONNECTION ID: ', connection.threadId);
});

module.exports = connection;
