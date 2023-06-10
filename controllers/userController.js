import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../controllers/generate/generateToken.js';


//Register new User

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already Exists');
  }

  const user = await User.create({
    username,
    email,
    password
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }


  res.status(200).json({ message: 'Register User' });
});






//Logout  User

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })
  res.status(200).json({ message: 'User logged Out' })
});






//Get  User Data
//Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json({ user });
});




//Update User Details
//Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email
    })
  } else {
    res.status(404);
    throw new Error('User not Found');
  }

});





//Auth user and set token
//route   POST /api/users/auth
//access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
  generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid Email or Password');
  }

});

export {
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
  authUser
};