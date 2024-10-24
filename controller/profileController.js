
const postModels = require("../models/postModels.js");



exports.getProfile = async (req, res) => {
    res.status(200).json({
        success: true
    });
};

exports.getProfileid = async(req,res) => {
    const userId = req.locals.user._id;
    try {
        
        const posts = await postModels
        .find({ author: userId })
        .sort({ createdAt: -1 });
        res.status(200).json({succes : true , posts}) ;
        
    } catch (error) {
        
        console.error('Hata:', error);
        res.status(500).json({ message: 'Bir hata oluştu.' });
    }


   

}
    