const express = require('express')

const app = express()

const port = 3000

const Database = require('./config/Database')

app.use(express.json())

app.use(express.urlencoded({extended:false}))



app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
