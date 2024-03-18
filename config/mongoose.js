const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1/db';
// mongoose.connect('url')

const db = mongoose.connect(url).then(()=>{
    console.log("Database connected successfully");
}).catch(error => console.log(error));


module.exports=db;  //Exports db