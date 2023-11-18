import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';
//@desc Auth user or login & get token
//@route POST/api/user/login
//@access public

const authUser = async (req,res)=>{
   const {email, password }= req.body;

   const user = await User.findOne({ email });
   
   if (user && (await user.matchPassword(password))){
   const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET,{
    expiresIn: '30d'
   });

   //set jwt as http-only cookies
   
   res.cookie('jwt',token,{
    httpOnly:true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge : 30* 24 * 60 * 60 * 1000, //30 days
   });

    res.json({
        _id : user._id,
        name: user.name,
        email: user.email,
        isAdmin : user.isAdmin
    });
   }else{
    res.status(401);
    throw new Error('Invalid email or password');
}
};
//@desc Register user
//@route GET/api/users
//@access public

const registerUser = async (req,res)=>{
    res.send('register User');
 };
//@desc Logout user / clear cookies
//@route POST/api/users
//@access private

const logoutUser = async (req,res)=>{
    res.send('logout User');
 };
 //@desc get user profile
//@route GET/api/users/profile
//@access private

const getUserProfile = async (req,res)=>{
    res.send('User profile');
 };

 //@desc update user profile
//@route PUT/api/user/profile
//@access private

const updateUserProfile = async (req,res)=>{
    res.send('Update user profile');
 };
  //@desc Get users
//@route PUT/api/users
//@access privateAdmin

const getUsers = async (req,res)=>{
    res.send('get users');
 };
  //@desc Get user by id
//@route GET/api/user/:id
//@access privateAdmin  

const getUserByID = async (req,res)=>{
    res.send('get user by id');
 };
  //@desc Delete user
//@route DELETEapi/user/:id
//@access privateAdmin

const deleteUser = async (req,res)=>{
    res.send('delete user');
 };
   //@desc update user
//@route PUT/api/users/:id
//@access privateAdmin

const updateUser = async (req,res)=>{
    res.send('update user');
 };

 export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser

 }