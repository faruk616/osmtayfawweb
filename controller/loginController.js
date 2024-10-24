const userModel = require("../models/userModels.js");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

require("dotenv").config() ;


exports.getLogin = async(req,res) => {res.status(200).send("giriş başarılı");
    
}  

exports.postLogin = async(req,res) => {
    
    
    try {

        const {email,password} = req.body ;
        const user = await userModel.findOne({email});
        if (!user) return res.status(404).send("email bulunamadı") ;
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) return res.status(400).send("password is wrong");
        const token = createToken(userModel._id);
        res.cookie("jsonwebtoken" , token ,{
            httpOnly : true ,
            maxAge : 1000*60*60*24 
        });
        res.send("/dashboard");
        
        
    } catch (error) {
        console.error('Giriş hatası:', error);
        res.status(500).send(error);
    }
}

const createToken = (userId) => {
    return jwt.sign({userId} , process.env.JWT_SECRET , {expiresIn:"1d"} ) ;
}