require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  // Default host is 'localhost'
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database: ', error);
  } else {
    console.log('Connected to database successfully!');
  }
});
connection.end();

module.exports = connection;