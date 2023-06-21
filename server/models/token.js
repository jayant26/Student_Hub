const  mongoose  = require("mongoose");

const tokenSchema=mongoose.Schema({
    token:{
        type:String,
        requird:true
    }
})

module.exports=mongoose.model('token',tokenSchema);
