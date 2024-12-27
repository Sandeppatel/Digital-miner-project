const mongoose = require('mongoose') ;

function connectData(){
 mongoose.connect("mongodb://127.0.0.1:27017/digital").then(()=>{
    console.log(" cunnect ot database ");
 }).catch((err)=>{
  console.log(err);
  
 })

   
}

connectData(); 
const user = mongoose.connections ;
module.exports = user ;
