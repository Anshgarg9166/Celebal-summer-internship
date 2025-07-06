const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        tech:{
            type:String,
            required:true
        },
        sub:{
            type:Boolean,
            required:false,
            default:false
        }
    }
)

const Alien = mongoose.model('Alien',alienSchema);

module.exports = Alien;