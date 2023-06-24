const mongoose=require('mongoose');


const commentSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    postid: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('comment',commentSchema);