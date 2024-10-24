const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require("validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        required: [true, "username area is required"],
        unique: true,
        validate : [validator.isAlphanumeric , "Only alphanumeric characters"]
    },
    email: {
        type: String,
        required: [true, "email area is required"],
        unique: true ,
        validate : [validator.isEmail , "valid email is required "]
    },
    password: {
        type: String,
        required: [true, "password area is required"],
        minLength : [8 , "at least 8 characters"]
    }   
});


    

userSchema.pre("save", async function(next) {
    const user = this;

    
    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        console.log("user pass 2", user.password);
        next();
    } catch (err) {
        next(err); 
    }
});




module.exports = mongoose.model('User', userSchema);
