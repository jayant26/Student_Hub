const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const Student=require('../models/student');
const multer =require("multer");
const upload=multer();
router.post('/register',upload.none(),(req,res,next)=>{
    console.log(req.body);
    // const student =new Student({
    //     s_id: new mongoose.Types.ObjectId(),
    //     first_name:req.body.fname,
    //     last_name:req.body.lname,
    //     email:req.body.e_add,
    //     number:req.body.contact_number,
    //     password:req.body.password

    // })

    // student.save()
    // .exec()
    // .then(result=>{
    //     console.log('result',result);
    //     res.status(201).json({
    //         message:"Student Resgistered successfully"
    //     })

    // })
    // .catch(err=>{
    //     console.log('error',err);
    //     res.status(500).json({error:err})
    // })
     res.status(200).json({message:"recieved student details"});
})


module.exports=router;