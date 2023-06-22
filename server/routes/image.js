const express=require('express');
const mongoose=require('mongoose');
const multer=require('multer');
const router=express.Router();
const { GridFsStorage } = require('multer-gridfs-storage');
const dotenv=require('dotenv');
const grid=require('gridfs-stream');

dotenv.config();

let gfs,gridfsBucket;
const conn=mongoose.connection;
conn.once('open',()=>{
    gridfsBucket=new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs'
    })
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection('fs');
})

const storage = new GridFsStorage({
    url:`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@node-shop-app.ke8idrm.mongodb.net/?retryWrites=true&w=majority`,
    option:{ useNewUrlParser: true},
    file:(req,file)=>{
        const match=["image/png","image/jpg"];
        if(match.indexOf(file.memeType)===-1){
            return `${Date.now()}-post-${file.originalname}`
        }

        return {
            bucketname:"photos",
            filename:`${Date.now()}-post-${file.originalname}`

        }
    }
})
const upload=multer({
    storage:storage
})

router.post('/upload',upload.single('file'),(req,res,next)=>{
    console.log(req.body);
    console.log(req.file);
    if(!req.file){
        return res.status(404).json({message:"file not found"});
    }
    const imageurl=`http://localhost:3001/file/${req.file.filename}`;
    return res.status(200).json({imageurl});
})


router.get('/:filename',async(req,res,next)=>{
    try {   
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})








module.exports=router;