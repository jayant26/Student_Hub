const mongoose=require('mongoose');


const postSchema=mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    detail: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: false
    },
    username: {
        type: String,
        required: true
    },
    isAlumni:{
        type:Boolean,
        required:true
    },
    isClub:{
        type:Boolean,
        required:true
    },
    createdDate: {
        type: Date
    }
})

module.exports=mongoose.model('post',postSchema);