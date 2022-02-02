const mysql = require('mysql');
const db = mysql.createPool({
    host : 'host',
    user : 'user',
    password : 'password',
    port: 8080,
    database : 'database'
});

module.exports = db;