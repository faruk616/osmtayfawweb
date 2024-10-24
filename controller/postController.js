const postModels = require("../models/postModels.js");

try {
    exports.createPost = async (req,res) => {
        const {title , content} = req.body ;
        const author = res.locals.user ;
        await postModels.create({content,title,author});
        res.status(201).json({succes:true , message : "post created"}) ;
    }

} catch (error) {
    res.status(500).json({succes:false ,error});
    
}

