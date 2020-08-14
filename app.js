
require('./model/db')
const express = require('express');
var cors = require('cors');
const app = express();
const routes = require('./routes');
const path = require('path');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/:id',routes.auth);
app.get('/:id/value/:weight',routes.measure);
app.get('/:id/bill',routes.bills);
app.post('/hakiki',routes.login);
app.get('/hizo',routes.getData);
app.listen(PORT,()=>{
    console.log("listening to the port:" + PORT)
})