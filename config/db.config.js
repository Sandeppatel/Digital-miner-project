const mongoose = require('mongoose') ;
require('dotenv').config();
const config = require('config');

const debug = require('debug')('development:server');





function connectData(){
 mongoose.connect(`${config.get("MONGO_URI")}scatch`).then(()=>{
   debug("cunnect ot database...");
 }).catch((err)=>{
  console.log(err);
  
 })
}

connectData(); 
const user = mongoose.connections ;
module.exports = user ;
