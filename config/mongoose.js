const mongoose = require('mongoose');
const url = 'mongodb+srv://akhilpratapsingh0256:x2BQrNTjvA5qQEYC@cluster0.ufnpxq1.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0';
// mongoose.connect('url')

const db = mongoose.connect(url).then(()=>{
    console.log("Database connected successfully");
}).catch(error => console.log(error));


module.exports=db;  //Exports db