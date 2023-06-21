const  mongoose  = require("mongoose");

const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
      email:{
        type: String,
        required: true,
        unique: true,
        // match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    isalumni:{type:Boolean,required:true},
    isclub:{type:Boolean,required:true},
    comapny:{type:String},
    role:{type:String},
    year:{type:String},
    branch:{type:String},
    coordinator_name:{type:String},
    coordinator_number:{type:String},
    description:{type:String},
    username:{
      type: String,
      required: true,
      unique: true,
      // match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
    password: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema);