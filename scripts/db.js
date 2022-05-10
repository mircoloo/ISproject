const mongoose = require('mongoose')


// conenect to mongoDB
const dbURI = 'mongodb+srv://mirco:123@isdatabase.psojv.mongodb.net/isDB?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    });

module.exports = 'db'