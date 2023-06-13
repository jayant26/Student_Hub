const { default: mongoose } = require("mongoose")

const alumniSchema=mongoose.Schema({
    // c_id:mongoose.Schema.Types.ObjectId,
    // name:{type:String,required:true},
  
    // // email:{
    // //     type: String,
    // //     required: true,
    // //     unique: true,
    // //     match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    // // },
    // // number:{type:Number,required:true},
    // // company:{type:String,required:true},
    // // role:{type:String,required:true},
    // // g_year:{type:Number,required:true},
    // // branch:{type:String,required:true},
    // // password: { type: String, required: true }
})

module.exports = mongoose.model('Alumni', alumniSchema);