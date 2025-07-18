const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const User = require('../models/User')

const authMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(201).json({error:'Acess denied or No token provided'})

    const token = authHeader.split(' ')[1];

    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decode.id).select('-password');
        next();
    }catch(err){
        res.status(400).json({error:'Invalid or expired token'})
    }
}

module.exports = authMiddleware;