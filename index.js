const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './HTMLpages/homepage.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, './HTMLpages/profile.html')); 
    
});



//GESISCE LE PAGINE CHE NON SONO VALIDE
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './HTMLpages/error.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}!`))