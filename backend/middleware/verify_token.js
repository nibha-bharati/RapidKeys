import User from '../models/user_model.js';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

export const verifyToken=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
   
      try{
        token=req.headers.authorization.split(' ')[1]
  
        const decoded=jwt.verify(token,process.env.TOKEN_KEY)
  
        req.user=await User.findById(decoded.id).select('-password')
        
      }catch(error){
        console.log(error)
        res.status(401).json({msg:"Not authorized"})
      }
    }
  
    if(!token){
      res.status(401).json({msg:"Token not found"})
    }
    next()
}