var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'shuai',
    password : '501105',
    port: 3306,
    database : 'todo'
});

module.exports = db;