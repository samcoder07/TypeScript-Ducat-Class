const express = require('express');
const {authorization}=require('../middleware')

const router=express.Router();

router.use(authorization)

router.get('/orders',(req,res)=>{
    res.send("<h1>Order page</h1>")
})

module.exports=router;