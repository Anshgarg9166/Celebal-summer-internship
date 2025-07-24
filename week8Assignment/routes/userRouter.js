require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const User = require('../models/User')

const authMiddleware = require('../middlewares/authMiddleware')

const multer = require('multer');


// router.use(authMiddleware);

// GET /api/user → Get all users
router.get('/', async(req,res)=>{
    try{
        const userData  =  await User.find();
        res.json(userData);
    }catch(err){
        res.send('Error: ',err);
    }
})


// POST /api/user → Create user
router.post('/',async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user)
    }catch(err){
        res.status(400).send(`Error in POST : ${err}`)
    }
})

// GET /api/user/gif → Search GIFs using GIPHY API
router.get('/gif', async (req, res, next) => {
  try {
    const searchTerm = req.query.q || 'funny'; // default term
    const limit = req.query.limit || 5;

    const giphyRes = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: process.env.YOUR_GIPHY_API_KEY,
        q: searchTerm,
        limit: limit,
      }
    });

    res.json({
      search: searchTerm,
      results: giphyRes.data.data.map(gif => ({
        title: gif.title,
        url: gif.images.original.url
      }))
    });

  } catch (err) {
    next(err);
  }
});

// GET /api/user/:id → Get user by ID
router.get('/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({error:"User not found"})
        res.status(201).json(user)
    }catch(err){
        res.status(400).send(`Error in get by id : ${err}`)
    }
})

// PUT /api/user/:id → Update user
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

// DELETE /api/user/:id → Delete user
router.delete('/:id',async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({error:"User not found"})
        res.json({message:"User deleted sucessfully"})
    }catch(err){
        res.status(400).send(`Error in delete by id : ${err}`)
    }
})

// Set storage destination and filename
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// File Upload Route (POST /api/user/upload)
router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});



module.exports = router;