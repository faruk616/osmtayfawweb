
const jwt = require("jsonwebtoken");
const userModels = require("../models/userModels");

const checkUser = async(req,res,next) => {
    const token = req.cookies.jsonwebtoken ;
    if (token) {
        jwt.verify(token , process.env.JWT_SECRET , async(err,decodedToken) => {
            if(err) {
                console.log(err.message);
                res.locals.user = null ;
                next()
            }
            else {
                const user = await userModels.findById(decodedToken.userId);
                res.locals.user = user ;
                next() ;
            }


        })
    }
    else{res.locals.user = null ;
        next()

    }

}


const authenticateToken = async (req,res,next) => {
    const token = req.cookies.jsonwebtoken;
    if(token) {
        jwt.verify(token,process.env.JWT_SECRET , (err)=>{
            if(err) {
                console.log(err.message);
                res.redirect("/login");
            }
            else {next();}
        })
    }
    else {res.redirect("/login");}
}

module.exports = {authenticateToken , checkUser}