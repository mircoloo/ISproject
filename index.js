
const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('homepage.html', {root: __dirname + "/public"});
});

app.get('/profile', (req, res) => {
    res.sendFile('profile.html', {root: __dirname + "/public"});
});



//GESISCE LE PAGINE CHE NON SONO VALIDE
app.get('/*', (req, res) => {
    res.sendFile('error.html', {root: __dirname + "/public"});
});

app.listen(port, () => console.log(`App listening on port ${port}!`))