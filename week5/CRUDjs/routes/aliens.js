const express = require('express');
const Alien = require('../models/alien')
const router = express.Router();


router.get('/',async(req,res)=>{
    try{
        const aliens = await Alien.find();
        res.json(aliens)
    }catch(err){
        res.send('error' + err)
    }
})

router.post('/',async(req,res)=>{
    const alien = new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1);
    }catch(err){
        res.send("error in saving"+err)
    }
})

module.exports = router;