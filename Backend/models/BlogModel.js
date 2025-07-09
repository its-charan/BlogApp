const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blogTitle:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    image:{
        type:String  // Store file path or URL
    },
    blogContent:{
        type:String,
        required:true
    }
},{timestamps:true})

const blogModel = mongoose.model("Blog",blogSchema)

module.exports = blogModel