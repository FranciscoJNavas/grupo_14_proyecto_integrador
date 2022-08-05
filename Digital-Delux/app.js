const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/product', function(req, res){
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
})

app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
})