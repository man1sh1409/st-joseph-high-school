const mongoose= require('mongoose');
const formsschema= new mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true},
    mobile:{type:Number,require:true}
},{collection:'contacts'})
module.exports=mongoose.model('form',formsschema);