const express = require('express')
const db = require('./config/db')
const cors = require('cors')
const app = express()

app.use(cors())

app.listen(process.env.port || 3000,function(){
    console.log('listening on 3000')
})

db.connection.once('open',()=>{
    console.log('db connected successfully')
}).on("error",(e)=>{
    console.log('error:', e)
})

app.use(express.json())

console.log('Hello')

// const data = [
// {title: "goat", price :  "30000"},
// {title: "cow " , price :  "600000"}
// ]

// app.use('/ads',(req,res)=>{
//     res.send({
//         message: 'Data fetched successfully',
//         data

//     })
// })

app.use('/',require('./routes/index'))