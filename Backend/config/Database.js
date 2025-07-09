const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Blogs").then(()=>{
    console.log('Database is connected ... ')
})

module.exports = mongoose