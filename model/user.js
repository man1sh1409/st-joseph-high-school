const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    firstName:{type:String,require:true},
    middleName:{type:String,require:true},
    lastName:{type:String,require:true},
    fatherName:{type:String,require:true},
    motherName:{type:String,require:true},
    mobile:{type:Number,require:true},
    email:{type:String,require:true},
    aadhar:{type:Number,require:true},
    DOB:{type:String,require:true},
    Qualification:{type:String,require:true},
    gender:{type:String,require:true}

},{collection:'stjosephs'})
module.exports=mongoose.model('user',userSchema);