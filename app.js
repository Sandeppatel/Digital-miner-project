const cookieParser = require('cookie-parser');
require('dotenv').config();
const express = require('express');
const path = require('path');
const userconfig = require("./config/db.config") ;
const userModule = require("./models/user.module") ;
const productModule = require("./models/product.module") ;
const ownerModule = require("./models/owners.module")

const ownersRouter = require("./routes/ownersRouter") ;
const usersRouter = require("./routes/usersRouter") ;
const productsRouter = require("./routes/productsRouter") ;


const app = express() ;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended  : true })) ;
app.use(express.static(path.join(__dirname , "public"))) ;
app.set("view engine" , "ejs");


app.use("/owners" , ownersRouter);
app.use("/users" , usersRouter);
app.use("/products" , productsRouter);

app.get("/" , (req , res)=>{
    res.send(" hey ") ;
})

app.listen(process.env.PORT) ;



