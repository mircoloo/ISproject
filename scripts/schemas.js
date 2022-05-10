const mongoose = require('mongoose')

var Schema = mongoose.Schema
var userDataSchema = new Schema({
    email: {type: String, required: true},
    password: String,
}, {collection: "persons"});

var UserData = mongoose.model('UserData', userDataSchema)

module.exports = {UserData}