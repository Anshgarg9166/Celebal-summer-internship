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

router.get('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien)
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
        const a1 = await Alien.insertOne(alien)
        res.json(a1);
    }catch(err){
        res.send("error in saving"+err)
    }
})

router.patch('/:id',async (req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        console.log(err)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const result = await Alien.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Alien not found' });
        }
        res.json({ message: 'Alien deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting alien', error: err });
    }
});

module.exports = router;