import registerModel from "../model/userModel.js"
import jwt from "jsonwebtoken";

// secret key is part of jwt syntax , thats it.
// we have to use it in token syntax.
const secretKey="special";

// user registration function
export const registerUser=  async (req,res)=>{
    try {

        const {name,email,password}=req.body;

        const userRegister = new registerModel ({name,email,password:password}) 
        await userRegister.save();
        return res.status(201).json({success:true,userRegister})
        
    } catch (error) {

        console.log("user registeration failed",error);
        return res.status(500).json({message:error})
        
    }
}

export const loginUser = async(req,res)=>{
    try {
        const {email,password} =req.body;
        const loggedinUser = await registerModel.findOne({email,password});

        if(!loggedinUser){
            return res.status(401).json({message:"invalid Credentials"})
        };

        const token= jwt.sign({email:loggedinUser.email},secretKey,{expiresIn:"1h"});

        console.log(token)

        return res.status(200).json({message:"user login successfull",token: token,
    loggedinUser: loggedinUser})
        
    } catch (error) {
        console.log("internal server error",error)
        return res.status(500).json({message:error})
        
    }
}

export const userGet=async (req,res)=>{
    try{
        const user= await registerModel.find();
        if (user.length===0){
            return res.status(404).json({success:false,message:"user not found",user})
        }
        res.status(200).json({success:true,user})
    }
    catch(error){
            res.status(500).json({success:false,message:"internal error"})
    }
}
