
require('dotenv').config();
const mysql = require('mysql2');

const env = process.env;

const db = mysql.createConnection({

    port: 3306,
    host: 'localhost',
    user: env.DB_USER,
    password: env.DB_PW,
    database: env.DB_NAME
    
});

module.exports = db;
