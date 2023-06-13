const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const cors =require('cors');
// const router = express.Router();
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

mongoose.connect("mongodb+srv://jayantjain2609:07432241242@node-shop-app.ke8idrm.mongodb.net/?retryWrites=true&w=majority");

const studentRoutes=require('../server/routes/student');
const alumniRoutes=require('../server/routes/alumni');
const clubRoutes=require('../server/routes/club');

app.use('/student',studentRoutes);
app.use('/alumni',alumniRoutes);
app.use('/club',clubRoutes);



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