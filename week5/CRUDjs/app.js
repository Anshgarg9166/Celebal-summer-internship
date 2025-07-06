//To get all the aliens
//GET : http://localhost:9000/aliens 
//To get a single alien 
//GET : http://localhost:9000/aliens/<id>
//To make a new alien
//POST: http://localhost:9000/aliens
//to update an alien
//PATCH: http://localhost:9000/aliens/<id>


const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();

const uri = process.env.URI;

const app = express();

mongoose.connect(uri);
const con = mongoose.connection

con.on('open',function(){
    console.log('connected ...')
})
app.use(express.json());

const alienRouter = require('../CRUDjs/routes/aliens')
app.use('/aliens',alienRouter);

app.listen(9000,()=>{
    console.log('Server started');
})