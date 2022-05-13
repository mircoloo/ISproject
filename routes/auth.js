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
                res.render("userProfile", {user: user});
            }else{
                //res.redirect("/?valid=false");
                var messageError = "Credenziali non valide"
                res.render('login', {error: messageError})
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
                var messageError = "Email già presente"
                res.render('login', {error: messageError})
            }
            
            break;
    }   

})






module.exports = router


