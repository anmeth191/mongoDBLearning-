/*This File makes the conection in the Data base using mongoose */

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/students-test" , {useNewUrlParser:true});
mongoose.connection
.once("open" , ()=>{console.log("Connected")})
.on("error" , (error)=>{ console.log(`An error ocurred ${error}`)})