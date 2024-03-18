const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.MONGOURL;
// mongoose.connect('url')

const db = mongoose.connect(url).then(()=>{
    console.log("Database connected successfully");
}).catch(error => console.log(error));


module.exports=db;  //Exports db