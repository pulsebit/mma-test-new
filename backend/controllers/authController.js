import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';
import generateToken from '../utils/generateToken.js';
import asyncHandler from 'express-async-handler';

export const authGoogle = asyncHandler(async (req, res) => {
  const { profileObj, accessToken, googleId } = req.body;
  const user = await User.findOne({ email: profileObj.email });
  if (user) {
    const updateUser = await User.findByIdAndUpdate(user._id, { 'google.accessToken': accessToken });
    res.cookie('access_token', generateToken({ id: user._id }), {httpOnly: true, signed: true});
    res.cookie('id_token', generateToken(updateUser), {httpOnly: true, signed: true});
    res.cookie('user_id', updateUser._id, {httpOnly: true, signed: true});
    res.json({
      id_token: generateToken(updateUser),
      access_token: generateToken({ id: user._id }),
      user_id: updateUser._id,
      updateUser
    });
    return;
  }
  const createUser = await User.create({
    name: profileObj.name, 
    email: profileObj.email,
    'google.googleId': googleId,
    'google.accessToken': accessToken,
  });
  res.cookie('access_token', generateToken({ id: createUser._id }), {httpOnly: true, signed: true});
  res.cookie('id_token', generateToken(createUser), {httpOnly: true, signed: true});
  res.cookie('user_id', createUser._id, {httpOnly: true, signed: true});
  res.json({
    id_token: generateToken(createUser),
    access_token: generateToken({ id: createUser._id }),
    user_id: createUser._id,
    createUser,
  });
});

export const onAuthStateChanged = (req, res) => {
  const { access_token } = req.signedCookies;
  if (!access_token) {
		res.cookie('access_token', '', { maxAge: 0 });
    res.cookie('id_token', '', { maxAge: 0 });
    res.cookie('user_id', '', { maxAge: 0 });
    res.json({ isAuthenticated: false });
    return;
  }
  jwt.verify(access_token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.cookie('access_token', '', { maxAge: 0 });
      res.cookie('id_token', '', { maxAge: 0 });
      res.cookie('user_id', '', { maxAge: 0 });
      res.json({ isAuthenticated: false });
			return
    }
		res.json({ ...req.signedCookies, isAuthenticated: true });
  });
}

export const authLogout = asyncHandler((req, res) => {
  res.cookie('access_token', '', { maxAge: 0 });
  res.cookie('profile', '', { maxAge: 0 });
  res.send({ success: true });
});
