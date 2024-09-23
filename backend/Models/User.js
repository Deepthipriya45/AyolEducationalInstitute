const mongoose=require('mongoose')

const User=mongoose.Schema({
    rollNo:{
        type:String,
        required:true,
        unique:true
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    ucha:
    {
        type:String,
        required:true
    }
})

const UserModel=mongoose.model('User',User);
module.exports=UserModel