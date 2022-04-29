
const express = require('express')
const path = require('path')
const util = require('util')
const app = express()
const port = 3000

app.use(express.static('public'))

//GESTISCI TUTTE LE RICHIESTE
app.all('/*', (req, res, next) =>{
    console.log(req.url);
    next();
});


app.get('/', (req, res) => {
    res.sendFile('homepage.html', {root: __dirname + "/public"});
    
    //res.json({ user: 'tobi' })

});

app.get('/profile', (req, res) => {
    res.sendFile('profile.html', {root: __dirname + "/public"});
});


//PROVA GESTIONE RICHIESTE GET SU /search
app.get('/search', function(req, res){
    console.log(util.inspect(req.headers, {showHidden: false, depth: null}))
    console.log(util.inspect(req.url, {showHidden: false, depth: null}))
    console.log(util.inspect(req.query, {showHidden: false, depth: null}))
    res.status(200).send('Check console!');
});

//PROVA GESTIONE RICHIESTE POST
app.post('/subscribe', function(req, res){
    console.log(util.inspect(req.headers, {showHidden: false, depth: null}))
    console.log(util.inspect(req.params, {showHidden: false, depth: null}))
    res.status(201).send('You are now subscribed!');
    console.log(req.headers.val);
});

//GESISCE LE PAGINE CHE NON SONO VALIDE
app.get('/*', (req, res) => {
    res.sendFile('error.html', {root: __dirname + "/public"});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});

