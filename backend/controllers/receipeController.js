import Receipe from '../models/receipeModel.js';

import fs from "fs";
// import fs from "fs";
// import slugify from "slugify";

export const addReceipe = async (req,res)=>{
    const receipe = req.body;
    // const { base64 } = req.body;
    const newReceipe = new Receipe(receipe);

    

    try{

        
        await newReceipe.save();
        res.send(newReceipe);

    }catch(err){
        res.json({message: err.message})
    }
}

export const receipeList = async (req, res) =>{
let receipe = await Receipe.find();
if(receipe.length > 0 ){
    res.send(receipe);
} else {
    res.send({result: "No receipe found"})
}
}


export const searchList = async (req,res)=>{
    let result = await Receipe.find({
        "$or":[
            {name:{$regex: req.params.key}},
            {components:{$regex: req.params.key}}
           
        ]
    })
    res.send(result);
}

export const updateReceipe = async (req,res)=>{
    let result = await Receipe.updateOne(
        {_id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result);
}

export const deleteReceipe = async (req,res)=> {
    let result = await Receipe.deleteOne({_id: req.params.id});
     res.send(result);
}

export const showaReceipe = async (req,res) =>{
    let result = await Receipe.findOne({_id: req.params.id});
     if(result){
         res.send(result);
     }else{
         res.send({result: "No Result Found"});
     }
} 

