const mongoose = require('mongoose');
const connectDB=async ()=>{

    const conn=await mongoose.connect('mongodb://localhost:27017/ayol-database');
    if(conn){
        console.log("connected to database successfully")
    }else{
        console.log("Error connecting to database");
    }
     

}

module.exports=connectDB