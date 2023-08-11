const connection = require('./dbConfig');

// Example function for inserting data
function insertData(data, callback) {
  const query = 'INSERT INTO your_table_name SET ?';
  connection.query(query, data, callback);
}

// Other CRUD functions (update, delete, select) can follow the same structure

module.exports = {
  insertData,
  // export other functions here
};