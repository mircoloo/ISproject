const express = require('express')
const router = express.Router()




router.get('/', (req, res) => {
    if(req.query.valid  == 'false'){
        console.log("passwor sbaglaita")
    }


    res.render('login')
})


module.exports = router