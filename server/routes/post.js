const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const checkAuth=require('../middleware/checkAuth')
const Post=require('../models/post');
router.post('/create',checkAuth,(req,res,next)=>{
    console.log(req.body);
    const post=new Post(req.body);
    post.save().then(response=>{
        res.status(200).json({message:"Post saved successfully"})
    }).catch(err=>{
        res.status(500).json({error:err});
    })
  
})





module.exports=router;