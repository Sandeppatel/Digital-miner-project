const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = mongoose.Schema({
    image : {
        type : String ,
        required : true ,
    },
    name : {
        type : String ,
        required : true ,
    },
    price : {
        type : Number ,
       required : true ,
    },
    discount : {
        type : Number ,
        default : 0,
    },
    bgcolor : {
       type : String ,
       required :true ,
    } ,
    panelcolor : {
        type : String ,
        required : true ,
    },
    textcolor : {
      type :  String ,
      required :  true ,
    } ,
    
}) ;

module.exports = mongoose.model('product'  , productSchema) ;

