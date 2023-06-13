const express=require('express');
const router=express.Router();
const multer=require('multer');
const upload=multer();
router.post('/register',upload.none(),(req,res,next)=>{
    console.log(req.body);
    res.status(200).json({message:"recieved club details"});
})


module.exports=router;