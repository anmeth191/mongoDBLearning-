// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


// const userSchema = new Schema({
//     name:String,
//     email:String,
//     password:String,
//     level:string
// })


// const User = mongoose.model('userModel' , userSchema);



// module.exports = User;


//create my schema and model for my usersCollections

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
        name:String,
        email:String,
        password:String,
        level:string
 })


 const User = mongoose.model('userModel' , userSchema);


 module.exports = User;