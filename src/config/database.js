const mysql = require('mysql2/promise');
require('dotenv').config();

console.log('=== DB CONFIG DEBUG ===');
console.log('DB_HOST:', process.env.DB_HOST || 'NON DÉFINI → CRASH ATTENDU SANS VARS');
console.log('DB_PORT:', process.env.DB_PORT || 'NON DÉFINI');
console.log('DB_NAME:', process.env.DB_NAME || 'NON DÉFINI');
console.log('ATTENTION: Ajoutez ces vars sur Render Dashboard !');
console.log('========================');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;