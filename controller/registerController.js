
const userModel = require("../models/userModels.js");


exports.getRegister = async(req,res) => {res.status(200).send("giriş başarılı")
    
}  ;


 
exports.postRegister = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const isUseremail = await userModel.findOne({email});
        const isUsername = await userModel.findOne({username});
        if(isUsername || isUseremail) return res.status(401).send("user already exists.");
        
        const newUser = new userModel({ username, email, password }); 
        await newUser.save()
        console.log("User saved" ,  newUser);
        

        
        return res.send("okey")
    } catch (error) {
        console.error("Error saving user:", error);
        let errors = {} ;
        if (error.name === "ValidationError"){
            Object.keys(error.errors).forEach((key)=>{
                errors[key] = error.errors[key].message
            })
        }
        console.log("errorrss 2 .::.:. " , errors)


        
        
        return res.status(500).json({ succes: false , error });
    }
};

