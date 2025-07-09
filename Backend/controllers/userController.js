const userModel = require('../models/Usermodel')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const handleSignUp = async(req,res)=>{
    const details = req.body

    try {
        const isExists = await userModel.findOne({email:details.email})
        
        if(isExists){
            return res.status(401).json({"message":"User already exists with this account"})
        }

        const hashPassword = await bcrypt.hash(details.password,10)

        const newUser = await userModel.create({
            name:details.name,
            email:details.email,
            password:hashPassword
        })

        return res.status(200).json({"message":"User is created"})


    } catch (error) {
        return res.status(500).json({"message":`${error}`})
    }
}

const handleLogin =async(req,res)=>{
    const details = req.body
    try {
        //find the user 
        const isExists = await userModel.findOne({email:details.email})
        
        if(!isExists){
            return res.status(404).json({"message":"User not founded"})
        }

        const comparePassword= await bcrypt.compare(details.password,isExists.password)

        if(!comparePassword){
            return res.status(403).json({"message":"Invalid Credentials"})
        }

        const token = jwt.sign({id:isExists._id,email:isExists.email},"@Charan2003")

        return res.status(200).json({"message":"Successfully Logged In","token":token})

    } catch (error) {
        return res.status(500).json({"message":`${error}`})
    }
}


module.exports = {handleSignUp,handleLogin}