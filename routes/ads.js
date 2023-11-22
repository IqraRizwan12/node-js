const express = require('express')
const router = express.Router()
const Ads = require('../models/Ads')
const verifyToken = require('../middleware/verifyToken')

router.get('/', async (req, res) => {
    // get data from db

    try{
        const ads = await Ads.find({}).limit(15)
    

    res.send({
        // message: 'data fetched successfully',
       data: ads
    })
}catch (e){
    res.send({
        message:e
    })
}

})

router.post('/addData',verifyToken, async (req, res) => {
    // post data from db
    try{
        const ad = new Ads(req.body)
        await ad.save()
       res.send({
           message: 'data posted successfully'
       })  
    }catch(e){
        res.send({
            message:e
        })
    }
    

})

router.put('/updateData',async (req, res) => {
    // update data from db
    try{
        const{_id} = req.body
        const data = await Ads.findOneAndUpdate({_id},req.body)
    
        res.send({
            message: 'data updated successfully',
            data 
        })  
    }catch(e){
        res.send({
            message:e
        })
    }
   
})

router.delete('/deleteData', async(req, res) => {
    // post data from db
    const {_id} = req.body
    const data = await Ads.findByIdAndDelete({_id})

    res.send({
        message: 'data deleted successfully',
        data
    })

})

router.get('/:id',async(req,res)=>{
    console.log('req->',req.params.id)
    const ad = await Ads.findOne({_id:req.params.id})
    res.send({
        message:'data fetched successfully',
        data: ad

    })
})

module.exports = router