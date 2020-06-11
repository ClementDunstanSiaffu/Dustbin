const mongoose = require('mongoose')
const uri = "mongodb+srv://Clement:Cle*1995@cluster0-my6sq.mongodb.net/User?retryWrites=true&w=majority"

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("mongodb connected")})
.catch(err=>{console.log("err")})

require('./stucture')