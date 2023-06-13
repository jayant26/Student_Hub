const { default: mongoose } = require("mongoose")

const studentSchema=mongoose.Schema({
    // s_id:mongoose.Schema.Types.ObjectId,
    // first_name:{type:String,required:true},
    // last_name:{type:String},
    // email:{
    //     type: String,
    //     required: true,
    //     unique: true,
    //     match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    // },
    // number:{type:Number,required:true},
    // password: { type: String, required: true }
})

module.exports = mongoose.model('Student', studentSchema);