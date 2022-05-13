const express = require('express');
const { update } = require('../models/user');
const router = express.Router()
const User = require('../models/user')


//getting all users
router.get('/', async (req, res) => {
    try{
        const users = await User.find().select('-password')
        res.json(users)
    } catch (err){
        res.status(500).json({ message : err.message})
    }
});
//getting one user
router.get('/:id', getUser,(req, res) => {
    res.send(res.user)
});

//creating one user

router.post('/', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser) 
    }catch(err){
        res.status(400).json({message :err.message})
    }
});

//updating one user
router.patch('/:id', getUser, async (req, res) => {
    if(req.body.email != null){
        res.user.email = req.body.email
    }
    if(req.body.password != null){
        res.user.password = req.body.password
    }

    try{
        const updateUser = await res.user.save()
        res.json(updateUser)
    }catch(err){
        res.status(400).json({message: error.message})
    }
});

//deleting one user

router.delete('/:id', getUser,async (req, res) => {
    try{
        await res.user.remove()
        res.json({message: "user deleted"})
    }catch(err){
        res.status(500).json({ message: err.message})
    }
});


//middleware
async function getUser(req, res, next){
    let user;
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: 'cannot find the user'})
        }
    }catch (err){
        return res.status(500).json({message: err.message})
    }

    res.user = user
    next()
}

module.exports = router