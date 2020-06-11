const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    id:{
        type:Number
    },
    weight:{
        type:Number
    },
    bill:{
        type:Number
    }
})

mongoose.model("USER",userSchema);
const person = mongoose.model("USER",userSchema)
module.exports = person;