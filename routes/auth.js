const express = require('express')
const router = express.Router()
const User = require('../models/user')
var bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    let user;
    let email = req.body.email
    let password = req.body.password
    switch(req.body.submit){
        case 'Accedi':
            user = await User.findOne({email: email})
            if(user && user.password == password){
                res.render("userProfile");
            }else{
                res.render("login");
            }
            break;
        case 'Registrati':
            user = await User.findOne({email: email})
            if(!user){
                const user = new User({
                    email: req.body.email,
                    password: req.body.password
                })
                const newUser = await user.save();
            
                res.send("inserito nel database");
            }else{
                res.send("Email già presente")
            }
            
            break;
    }   

})


module.exports = router

