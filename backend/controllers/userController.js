import User from '../models/userModel.js';
import jwt from "jsonwebtoken";


const jwtKey = 'e-comm';

export const welcomeController = async (req,res)=>{
    res.json({
        message: "Welcome to Receipe Recommender"
    })
};

export const registerUser = async (req,res) =>{
    const user = req.body ;

    const newUser = new User(user);
    try {
        await newUser.save();
        res.json(newUser);
    } catch(error) {
        res.json({message: error.message })
    }
}

export const loginUser = async (req,res )=>{
    if(req.body.email && req.body.password){
            
        let user = await User.findOne(req.body).select("-password");
        
        if(user){
          jwt.sign({user},jwtKey,{expiresIn: "2h"},(err,token)=>{
                if(err){
                    res.send({result: "something went wrong"})
                }
                res.send({user,auth: token});
            })
        }else{
            res.send({ message: "No user Found" })
        }
    }else{
        res.send({message: "Fill the data properly" })
    }
    
}

export const deleteUser = async (req,res)=>{
    let result = await User.deleteOne({_id: req.params.id});
     res.send(result);
}

export const listUser = async (req,res)=>{
    let users = await User.find();
    if(users.length >0){
        res.send(users);
    }else{
        res.send({result:"No Products found"})
    }
}

export const searchUsers = async (req,res)=>{
    let result = await User.find({
        "$or":[
            {username:{$regex: req.params.key}},
            {email:{$regex: req.params.key}},
            {phone:{$regex: req.params.key}}
        ]
    })
    res.send(result);
}

