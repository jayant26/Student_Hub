const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const checkAuth=require('../middleware/checkAuth')
const Post=require('../models/post');
router.post('/create',checkAuth,(req,res,next)=>{
    // console.log(req.body);
    const post=new Post(req.body);
    post.save().then(response=>{
        res.status(200).json({message:"Post saved successfully"})
    }).catch(err=>{
        res.status(500).json({error:err});
    })
  
})

router.get('/get',(req,res,next)=>{
    const category=req.query.category;
    // console.log(req.query.username);
    if(category==='All')
    {
        Post.find().then((post)=>{
            // console.log(post);
            res.status(200).json(post);
        })
    }
    else if(category==='Alumni')
    {
        Post.find({$and:[{isAlumni:true,isClub:false}]}).then(post=>{
            // console.log(post);
            res.status(200).json(post);
        })
    }
    else if(category==='Club')
    {
        Post.find({$and:[{isAlumni:false,isClub:true}]}).then(post=>{
            // console.log(post);
            res.status(200).json(post);
        })
    }
    else if(category==='Student')
    {
        Post.find({$and:[{isAlumni:false,isClub:false}]}).then(post=>{
            // console.log(post);
            res.status(200).json(post);
        })
    }
    else{
        Post.find({username:req.query.username}).then(post=>{
            // console.log(post);
            res.status(200).json(post);
        })

    }

})


router.get('/:id',(req,res,next)=>{
    // console.log(req.params.id);
    const _id=req.params.id;
    Post.findById(_id).exec().then((result)=>{
        // console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json({error:err});
    })
})


router.patch('/update/:id',checkAuth,(req,res,next)=>{
    const id=req.params.id;
    console.log("i am working first");
    console.log(req.body);
    // console.log(id);
    // res.status(200).json({id});
    
    Post.findByIdAndUpdate(id, { $set: req.body })
        .exec()
        .then(result => {

            res.status(200).json({result});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.delete('/:id',(req,res,next)=>{
    const id=req.params.id;
    Post.findByIdAndDelete(id).exec().then(result=>{
        res.status(200).json({message:"deleted successfulyy"});
    }).catch(err=>{
        res.status(500).json({error:err});
    })
})





module.exports=router;