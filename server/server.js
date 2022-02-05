// server/server.js
const express = require('express');
const app = express();
const api = require('./Router/index');
const PORT = process.env.PORT || 3001;
const db = require('./config/db');

const cors = require('cors');
app.use(cors());

app.use('/api', api);

app.get('/api/products', (req, res) => {
    db.query("SELECT * FROM BRD_LIST", (err, data) => {
        if(!err) res.send({ products : data });
        else res.send(err);
    })
})

//DB INSERT
let sql = "INSERT INTO users (name,email,password,roles) VALUES(?,?,?,?)";
let params = ['test', 'test@naver.com', 'test', 'user'];

db.query(sql, params, function(err, rows,fields){
    if(err){
        console.log(err);
    }
    else{
        console.log(rows.insertId);
    }
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})