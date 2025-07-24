const express = require('express');
const app = express();

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

// api/auth/register is used register a new user
router.post('/register',async (req,res)=>{
    try{
        const {name,email,age,password} = req.body;

        const userExists = await User.findOne({email});
        if(userExists) return res.status(404).json({error : 'User already Exists'});

        const user = await User.create({name,email,password,age});
        res.status(200).json({message:'User Registered successfully'})
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

// api/auth/login is used to login an existing user
router.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email})
        if(!user) return res.status(400).json({error:'User not found'});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({error:'Invalid email or password'})

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.json({token});
    }catch(err){
        res.status(500).json({error:err.message})
    }

})

module.exports = router;


