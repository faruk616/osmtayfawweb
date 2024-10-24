const mongoose = require('mongoose');
const User = require("./userModels.js");

const postSchema = new mongoose.Schema({
    title: { type: String, required: false },
    content: { type: String, required: true },
    author: { type:mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    createdAt: { type: Date, default: Date.now }
  });

module.exports = mongoose.model("Post" , postSchema);


  