//server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const db = require('./config/db')

app.get('/api/products', (req, res) => {
  db.query("SELECT * FROM users", (err, data) => {
      if(!err) res.send({ products : data });
      else res.send(err);
  })
})

const server = require('http').createServer(app);

app.use(cors()); // cors 미들웨어를 삽입합니다.

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({message:'this is server'});
});

server.listen(8080, ()=>{
  console.log('server is running on 8080')
})