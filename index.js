
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const persone = require('./prova.json')
const session = require('express-session');
//const db = require('./scripts/db')

// conenect to mongoDB
const dbURI = 'mongodb+srv://mirc:123@isdatabase.psojv.mongodb.net/isDB?retryWrites=true&w=majority'
mongoose.connect(dbURI, { usedNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    });

const port = 3000
const app = express()

const static_path = path.join(__dirname, "/public")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(static_path))



const Schema = mongoose.Schema;

  

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/public/login.html"))
});
 
app.post('/auth', (req, res) =>{
    res.sendFile(path.join(__dirname, "/public/login.html"))
    console.log(req.body)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

