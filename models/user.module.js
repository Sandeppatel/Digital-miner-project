const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = mongoose.Schema({
    fullname : {
        type : String ,
        required : true ,
    },
    email : {
        type : String ,
        required : true ,
    },
    password : {
        type : String ,
        required : true ,
    },
    cart : {
        type : Array ,
        default : [],
    },
    isadmin : Boolean ,
    orders : {
        type : Array ,
        default : [],
    },
    contact : Number ,
    picture : String ,
}) ;

module.exports = mongoose.model('user'  , userSchema) ;

