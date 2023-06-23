const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const checkAuth=require('../middleware/checkAuth')
const Comment=require('../models/comment');
router.post('/add',(req,res,next)=>{
    console.log(req.body);
    const comment=new Comment(req.body);
    comment.save().then(()=>{
        res.status(200).json({message:"recieved comment"});
    }).catch(err=>{
        res.status(500).json({error:err})
    })
    
})

router.get('/getall/:id',(req,res,next)=>{
    const id=req.params.id;
    Comment.find({postid:id}).exec().then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json({error:err})
    })


})



module.exports=router;