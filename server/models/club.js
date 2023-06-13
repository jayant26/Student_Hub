const { default: mongoose } = require("mongoose")

const clubSchema=mongoose.Schema({
    // c_id:mongoose.Schema.Types.ObjectId,
    // name:{type:String,required:true},
    // coordinator_name:{type:String,required:true},
    // email:{
    //     type: String,
    //     required: true,
    //     unique: true,
    //     match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    // },
    // coordinator_number:{type:Number,required:true},
    // description:{type:String,required:true},
    // password: { type: String, required: true }
})

module.exports = mongoose.model('Club', clubSchema);