const mongoose = require("mongoose");
const { type } = require("os");

const ownerSchema = mongoose.Schema({
    fullname : {
        type : String ,
        minLength : 3 ,
        trim : true ,
    },
    email : {
        type : String ,
        required : true ,
    },
    password : {
        type : String ,
        required : true ,
    },
    products : {
        type : Array ,
        default : [],
    },
    
    picture : String ,
    gstin : String  ,
}) ;

module.exports = mongoose.model('owner'  , ownerSchema) ;

