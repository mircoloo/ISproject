
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const persone = require('./prova.json')

const port = 3000
const app = express()

const static_path = path.join(__dirname, "/public")


app.use(express.static(static_path))

const Schema = mongoose.Schema;

  

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/public/login.html"))
});
 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

