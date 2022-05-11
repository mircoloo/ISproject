const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {collection: "users"});


module.exports = mongoose.model('User', userSchema)
