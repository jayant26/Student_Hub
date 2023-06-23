const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');
const multer = require('multer');
const upload = multer();
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const Token=require('../models/token');


dotenv.config()
router.post('/login',(req,res,next)=>{
    User.find({$or:[{username:req.body.cred},{email:req.body.cred}]}).exec()
    .then((user)=>{
      if(user.length<1)
        {
          return  res.status(401).json({
            message:"Invalid username or password"
          })
        }
        else{
          bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(err)
            {
              return res.status(401).json({
                message:"Inavlid Username or password"
              })
            }
            else{
              if(result){
                const accesstoken=jwt.sign({
                  username:user[0].username,
                  email:user[0].email,
                  _id:user[0]._id
                },process.env.SECRET_KEY1,
                {
                  expiresIn:"1h"
                }
                
                )
                const refreshtoken=jwt.sign({
                  username:user[0].username,
                  email:user[0].email,
                  _id:user[0]._id
                },process.env.SECRET_KEY2,
                )

                const token=new Token({
                  token:accesstoken
                })
                token.save();
                return res.status(200).json({
                  message:"Successfully logged in",
                  Atoken:accesstoken,
                  Rtoken:refreshtoken,
                  _id:user[0]._id,
                  username:user[0].username

                })
              }
              return res.status(401).json({
                message:"Invalid username and password"
              })
            }
          })
        }
     
    }).catch((err)=>{
      res.status(500).json({error:err})
    })
   
})





router.post('/register', upload.none(), (req, res, next) => {
    console.log(req.body);
  console.log(typeof req.body.isalumni);
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      if (!req.body.isalumni && !req.body.isclub) {
        console.log("i am working 1");
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: hash,
          isalumni: req.body.isalumni,
          isclub: req.body.isclub,
        });

        user
          .save()
          .then((result) => {
            console.log(result);
            return res.status(201).json({
              message: 'User registered Successfully',
            });
          })
          .catch((err) => {
            return res.status(500).json({ error: err });
          });
      } else if (req.body.isalumni) {
        console.log("i am working 2");
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: hash,
          isalumni: req.body.isalumni,
          isclub: req.body.isclub,
          company: req.body.company,
          role: req.body.role,
          year: req.body.year,
          branch: req.body.branch,
        });

        user
          .save()
          .then((result) => {
            console.log(result);
            return res.status(201).json({
              message: 'User registered Successfully',
            });
          })
          .catch((err) => {
            return res.status(500).json({ error: err });
          });
      } else if (req.body.isclub) {
        console.log("i am working 3");
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: hash,
          isalumni: req.body.isalumni,
          isclub: req.body.isclub,
          coordinator_name: req.body.c_name,
          coordinator_number: req.body.number,
          description: req.body.detail,
        });

        user
          .save()
          .then((result) => {
            console.log(result);
            return res.status(201).json({
              message: 'User registered Successfully',
            });
          })
          .catch((err) => {
            return res.status(500).json({ error: err });
          });
      }
    }
  });
});





router.post('/register/check',(req,res,next)=>{
   console.log(req.body.email);
   User.find({email:req.body.email}).then(results=>{
    if(results.length)
    {
        res.status(200).json({ results,message: "This email already exists" });
    }
    else{
        User.find({username:req.body.username}).then(response=>{
            if(response.length)
            {
                res.status(200).json({message:"This username is in use"});
            }
            else{
                res.status(200).json({message:"No entries found"});
            }
        })
    }
   })
   .catch((error)=>{
    res.status(500).json({error:error.message})
   })

})


router.get('/:user_id',(req,res,next)=>{
    const _id=req.params.user_id;
    console.log(_id);
    User.findById(_id).select('username isalumni isclub').exec()
    .then((result)=>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch((err)=>{
      res.status(500).json({error:err})
    })
})


module.exports=router;