const mongoose = require('mongoose');

//Use ESO PROMISES TO MAKE THE DO FIRST THE CONECTION BEFORE ANY REQUESTS

mongoose.Promise = global.Promise;

before((done)=>{

    //connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/inventory' , { useNewUrlParser:true , useUnifiedTopology:true });

//check for the connection has been succesfully done
const db = mongoose.connection;
db.on('error' , console.log.bind(console , 'connection error'));
db.once('open' , ()=>{
    console.log('we are connected')
    done();
})
})//end of the before


