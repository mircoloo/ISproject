const { type } = require('express/lib/response');
const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({ 
    email: {type: String, required: true},
    password: {type: String, required: true},
    name:  {type: String, default: "Mirco"},
    surname:  {type: String, default: "Bisoffi"},
    bikes: Array,
    ebikes: Array,
    telefono: {type: String}
}, {collection: "users"});

module.exports = mongoose.model('User', userSchema)
