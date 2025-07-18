const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
    },
    password:{
        type:String,
        required:true,
    }
});

// this is used to hash password before saving in database
userSchema.pre('save',async function (next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,10);
    next();
})

module.exports = mongoose.model('User',userSchema);

