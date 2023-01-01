// get the client
const mysql = require('mysql2/promise');

const db = { connection: null };

(async () => {
  // create the connection to database
  db.connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'online_shopping',
    password: 'T!nInvisible123'
  });
  console.log('Database connected!');
})();


module.exports = db;