import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js';
//@desc Auth user or login & get token
//@route POST/api/user/login
//@access public

const authUser = async (req,res)=>{
   const {email, password }= req.body;

   const user = await User.findOne({ email });
   
   if (user && (await user.matchPassword(password))){
   generateToken(res, user._id);

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
//@route POST/api/users
//@access public

const registerUser = async (req,res)=>{
    const {name, email, password} = req.body;

    const userExists = await User.findOne({email});
    if(userExists){
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    if(user){
      generateToken(res, user._id);

      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
      })
    }else{
      res.status(400);
      throw new Error('Invaid user data');
    }
 };
//@desc Logout user / clear cookies
//@route POST/api/users
//@access private

const logoutUser = async (req,res)=>{
    res.cookie('jwt','',{
      httpOnly: true,
      expires: new Date(0)
    });
    res.status(200).json({message: 'Logged Out Successfully!'})
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