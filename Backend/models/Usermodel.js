const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("UserDetail",userSchema)

module.exports = {userModel}