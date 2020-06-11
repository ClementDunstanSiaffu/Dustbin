
const express = require('express');
const app = express();
const routes = require('./routes');
const path =require('path');
const { prototype } = require('stream');
const PORT = process.env.PORT || 3000;
require('./')


app.listen(PORT,()=>{
    console.log("connected to the port:" + PORT)
})