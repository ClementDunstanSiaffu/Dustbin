
require('./model/db')
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('/:id',routes.auth);
app.get('/:id/value/:weight',routes.measure);
app.get('/:id/bill',routes.bills);
app.listen(PORT,()=>{
    console.log("listening to the port:" + PORT)
})