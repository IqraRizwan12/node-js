const express = require('express')
const router = express.Router()
const Users = require('../models/Users')

router.get('/',async(req,res)=>{
    const user = await Users.find()

    res.send({
        message:'All users',
        data:user
    })
})

router.post('/register', async (req, res) => {
    // post data from db
    try{
        const user = new Users(req.body)
        await user.save()
        
      
       res.send({
           message: 'User Registered Successfully'
       })  
    }catch(e){
        res.send({
            message:e
        })
    }
    

})

router.post('/login',(req,res)=>{
    
})



module.exports = router