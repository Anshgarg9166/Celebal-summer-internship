const express = require('express');
const router = express.Router();
const User = require('../models/User')

const authMiddleware = require('../middlewares/authMiddleware')

// router.use(authMiddleware);

// GET /api/users → Get all users
router.get('/', async(req,res)=>{
    try{
        const userData  =  await User.find();
        res.json(userData);
    }catch(err){
        res.send('Error: ',err);
    }
})

// POST /api/users → Create user
router.post('/',async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user)
    }catch(err){
        res.status(400).send(`Error in POST : ${err}`)
    }
})

// GET /api/users/:id → Get user by ID
router.get('/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({error:"User not found"})
        res.status(201).json(user)
    }catch(err){
        res.status(400).send(`Error in get by id : ${err}`)
    }
})

// PUT /api/users/:id → Update user
router.put('/:id',async(req,res)=>{
    try{
        const userData = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(userData);
    }catch(err){
        return res.status(400).json({ error: err.message });
    }
})

// DELETE /api/users/:id → Delete user
router.delete('/:id',async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({error:"User not found"})
        res.json({message:"User deleted sucessfully"})
    }catch(err){
        res.status(400).send(`Error in delete by id : ${err}`)
    }
})

module.exports = router;