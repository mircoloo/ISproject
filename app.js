
const express = require('express')
const path = require('path')
const session = require('express-session');
const bodyParser = require('body-parser');
const {UserData} = require('./scripts/schemas')
require('./scripts/db')


const port = 3000
const app = express()


app.use(express.static(path.join(__dirname, "/public")))
app.use("/styles",  express.static(__dirname + '/public/stylesheets'));
app.use("/scripts", express.static(__dirname + '/public/javascripts'));
app.use("/images",  express.static(__dirname + '/public/images'));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended : false }));
// login middleware
app.use('/auth', (req,res, next) => {
    let item = {
        email: req.body.email,
        password: req.body.password
    }

    UserData.find({"email": item.email}, (err, user) => {
        if(user[0]){
            if(item.password == user[0].password){
                res.send(`AUTENTICATO!, benvenuto ${item.email}`)
            }else{
                res.sendFile(path.join(__dirname, "/public/login.html"))
            }

        }else{
            res.send("user not found")
        }
    });
})


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "public/login.html"))
});
 
app.get('/find', (req, res) => {
    console.log(req.query)
    UserData.find({"email": req.query.email}, (err, user) => {
        if(user[0]){
            res.send(user[0])
            console.log(user[0])
        }else{
            console.log("user not found")
            res.send("user not found")
        }
    });
})

app.post('/auth', (req, res) =>{
    const submit = req.body.name;

    console.log(submit)

    var data = new UserData(item)
    console.log(data)
    //data.save()
}); 

/* 
app.post('/auth', (req, res) =>{
    //res.sendFile(path.join(__dirname, "/public/login.html"))
    let email = req.body.email
    UserData.find(email, (err, doc) => {
        if(err){
            console.error('error, no entry found')
        }else{
            var item = {
                name: req.body.username,
                password: req.body.password
            }
            var data = new UserData(item)
            console.log(data) 
            res.send("trovato")
        }
    })
   
}); */

app.use((req,res) =>{
    res.status(404).json({error: '404'});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

