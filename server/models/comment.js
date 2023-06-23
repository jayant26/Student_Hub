const mongoose=require('mongoose');


const commentSchema=mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    comments: {
        type: String,
        required: true
    },
    postid:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required:true
    }
})

module.exports=mongoose.model('comment',commentSchema);