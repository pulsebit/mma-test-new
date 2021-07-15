import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';
import generateToken from '../utils/generateToken.js';
import asyncHandler from 'express-async-handler';
import { verify } from '../utils/google.js';

const cookieOptions = { httpOnly: true, signed: true };

export const authFb = asyncHandler(async (req, res) => {
  const { email, userID, picture, name } = req.body;
  let user = await User.findOne({ fb_id: userID });
  let tokenIdValue;
  if (!user && email) {
    user = await User.findOne({ email });
    if (user) {
      res.json({ 
        success: false, 
        error: 'You can’t create an Account right now. Email Already exists.' 
      });
      return;
    }
    user = await User.create({
      fb_id: userID, email, picture, name,
    });
  } 
  else if (!user && !email) {
    res.json({ 
      success: false, 
      error: 'You can’t create an Account right now. Try again later.' 
    });
    return;
  }
  tokenIdValue = { 
    user_id: user._id, 
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    picture: user.picture,
    name: user.name,
  };
  const encodedTokenId = generateToken(tokenIdValue);
  const accessToken = generateToken({ id: user._id });
  res.cookie('access_token', accessToken, cookieOptions);
  res.cookie('id_token', encodedTokenId, cookieOptions);
  res.cookie('user_id', user._id, cookieOptions);
  req.user_id = user._id;
  res.json({
    id_token: encodedTokenId,
    access_token: accessToken,
    user_id: user._id,
    isAuthenticated: true,
  });
});

export const authSignin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user && (await user.matchPassword(password)) ) {
    const tokenIdValue = { 
      user_id: user._id, 
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      picture: user.picture,
      name: user.name,
    };
    const encodedTokenId = generateToken(tokenIdValue);
    const accessToken = generateToken({ id: user._id });
    res.cookie('access_token', accessToken, cookieOptions);
    res.cookie('id_token', encodedTokenId, cookieOptions);
    res.cookie('user_id', user._id, cookieOptions);
    req.user_id = user._id;
    res.json({
      id_token: encodedTokenId,
      access_token: accessToken,
      user_id: user._id,
      isAuthenticated: true,
    });
  } else {
    res.json({ 
      success: false, 
      error: 'Email or Password is incorrect!' 
    });
  }
}); 

export const authGoogle = asyncHandler(async (req, res) => {
  const { tokenId } = req.body;
  const payload = await verify(tokenId); 
  let user = await User.findOne({ email: payload.email, sub: payload.sub });
  let tokenIdValue;
  if (!user) {
    user = await User.create({
      sub: payload.sub,
      email: payload.email,
      first_name: payload.given_name,
      last_name: payload.family_name,
      picture: payload.picture,
      name: payload.name,
    });
  }
  tokenIdValue = { 
    user_id: user._id, 
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    picture: user.picture,
    name: user.name,
  };
  const encodedTokenId = generateToken(tokenIdValue);
  const accessToken = generateToken({ id: user._id });
  res.cookie('access_token', accessToken, cookieOptions);
  res.cookie('id_token', encodedTokenId, cookieOptions);
  res.cookie('user_id', user._id, cookieOptions);
  req.user_id = user._id;
  res.json({
    id_token: encodedTokenId,
    access_token: accessToken,
    user_id: user._id,
    isAuthenticated: true,
  });
});

export const onAuthStateChanged = (req, res) => {
  const { access_token } = req.signedCookies;
  function expCookie() {
    res.cookie('access_token', '', exp);
    res.cookie('id_token', '', exp);
    res.cookie('user_id', '', exp);
  }
  const exp = { maxAge: 0 };
  if (!access_token) {
		expCookie();
    res.json({ isAuthenticated: false });
    return;
  }
  jwt.verify(access_token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      expCookie();
      res.json({ isAuthenticated: false });
			return;
    }
		res.json({ ...req.signedCookies, isAuthenticated: true });
  });
}

export const authLogout = asyncHandler((req, res) => {
  res.cookie('access_token', '', { maxAge: 0 });
  res.cookie('id_token', '', { maxAge: 0 });
  res.cookie('user_id', '', { maxAge: 0 });
  req.user_id = null;
  res.json({ success: true });
});
