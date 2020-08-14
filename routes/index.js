const mongoose = require('mongoose');
//const { findOne } = require('../model/stucture');
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
    res.send("weight has already been measured")
} 

exports.bills = async (req,res)=>{
    const action = req.params;
    const user = await User.findOne(action)
    console.log(user)
    res.send(`${user.bill}`)
}

exports.login = async (req,res)=>{
    const namba = req.body.id;
     console.log(namba)
     const take = {id:namba}
     console.log(take)
    //console.log(value)
    const user = await User.findOne(take);
    console.log(user)
    if(user){
        res.redirect('https://garbage-collection.vercel.app/first')
    }else{
       res.redirect('https://garbage-collection.vercel.app/login') 
    }

}

exports.pata =  (req,res)=>{

   User.find((err,docs)=>{
        if(!err){
            console.log(docs)
            res.json(docs)
           
        }else{
            console.log("there is an error")
        }
    })

    
}