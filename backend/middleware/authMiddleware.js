import jwt from "jsonwebtoken";
import User from '../models/userModel.js';

//protect routes
 const protect = async (req,res,next)=>{
    let token;

    //read the JWT from cookie
    token = req.cookies.jwt;

    if(token){
       try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select('-password');
        next();  
    }catch(error){
        res.status(401).json("token failed");
        throw new Error('Not authorized, token failed');

       }
    }else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }

};
//Admin middleware
 const admin = (req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next();
    }else {
        res.status(401);
        throw new Error('Not authorized as Admin');
    }
 };

 export {protect, admin};