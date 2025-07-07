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
//changed to aliens as collection name in mongodb

module.exports = Alien;