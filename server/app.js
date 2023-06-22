const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const cors =require('cors');
// const router = express.Router();
const dotenv=require('dotenv');
const app=express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });
dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@node-shop-app.ke8idrm.mongodb.net/?retryWrites=true&w=majority`).then(
    (response)=>{
        console.log("Working");
    }
).catch(err=>{
    console.log(err);
});

const userRoutes=require('../server/routes/user');
const imageRoutes=require('../server/routes/image');
const postRoutes=require('../server/routes/post');
app.use('/user',userRoutes);
app.use('/file',imageRoutes);
app.use('/post',postRoutes);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    // it will forward the error request
    next(error);

});

// it will handle all type of error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

// it will used to export app.js so that we can use it in server.js
// module.exports=app;
const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});