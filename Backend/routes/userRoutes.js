const express = require('express')

const router = express.Router()

const {handleSignUp,handleLogin} = require('../controllers/userController')


// http://localhost:3000/api/signup
router.post('/signup',handleSignUp)


router.post('/login',handleLogin)
module.exports = router