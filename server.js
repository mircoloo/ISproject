const express = require('express')
const path = require('path')
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config()
require('./scripts/dbConnection')


const port = process.env.PORT || 3000
const app = express()

//MIDDLEWARES
app.use(express.static(path.join(__dirname, "/public")))
app.use("/styles",  express.static(__dirname + '/public/stylesheets'));
app.use("/scripts", express.static(__dirname + '/public/javascripts'));
app.use("/images",  express.static(__dirname + '/public/images'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//ROUTES
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);


app.use((req, res, next) => {
    console.log(req.url)
    next()
})

//
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "public/login.html"))
});
 

app.use((req,res) =>{
    res.status(404).json({error: '404'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

