const { type } = require('express/lib/response');
const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name:  String,
    surname:  String,
    email: {type: String, required: true},
    password: {type: String, required: true},
    bikes: Array,
    ebikes: Array,
}, {collection: "users"});

module.exports = mongoose.model('User', userSchema)
