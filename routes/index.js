const mongoose = require('mongoose')
const User = mongoose.model("USER")
//const person = require('../model/stucture')
exports.auth = async (req,res)=>{
    const action = req.params;
    console.log(action)
    const user = await User.findOne(action)
    console.log(user)
    if(user){
        res.send("true")
    }else{
        res.send("false")
    }
}

exports.measure = async (req,res)=>{
    const obj = req.params;
    const obj2 = {id:`${obj.id}`}
    console.log(obj2.id)
    const user = await User.findOne(obj2);
    console.log(user)
    const docs = await User.find((err,docs)=>{return docs})
    console.log(docs)
    const index = docs.findIndex((doc)=>`${doc.id}`===obj2.id)
    console.log(index)
   
   // const index = User.indexOf(obj2)
    //console.log(index)
    const weightNumber = parseInt(obj.weight)
    console.log(weightNumber)
    totalWeight = weightNumber + user.weight;
    console.log(totalWeight)
    const price = totalWeight*0.5
    console.log(price)
    user.weight = totalWeight;
    user.bill = price;
    const user2 = await User.replaceOne(docs[index],user)
    console.log(user2)
} 

exports.bills = async (req,res)=>{
    const action = req.params;
    const user = await User.findOne(action)
    console.log(user)
    res.send(`${user.bill}`+" "+'Tsh')
}