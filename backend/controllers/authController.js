import User from '../models/userModel.js'
import generateToken, { checkToken, decodeIdToken } from '../utils/generateToken.js';
import asyncHandler from 'express-async-handler';
import { verify } from '../utils/google.js';

export const authFb = asyncHandler(async (req, res) => {
  const { email, userID, picture, name } = req.body;
  let user = await User.findOne({ email, fb_id: userID });
  if (!user) {
    user = await User.create({
      fb_id: userID, email, picture, name,
    });
  }
  const tokenIdValue = createUserTokenValue(user);
  const { access_token, id_token } = createToken(res, user._id, tokenIdValue);
  res.json({
    id_token,
    access_token,
    user_id: user._id,
    isAuthenticated: true,
  });
});

export const authSignin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user && (await user.matchPassword(password)) ) {
    const tokenIdValue = createUserTokenValue(user);
    const { access_token, id_token } = createToken(res, user._id, tokenIdValue);
    res.json({
      id_token,
      access_token,
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
  const tokenIdValue = createUserTokenValue(user);
  const { access_token, id_token } = createToken(res, user._id, tokenIdValue);
  res.json({
    id_token,
    access_token,
    user_id: user._id,
    isAuthenticated: true,
  });
});

export const onAuthStateChanged = (req, res) => {
  const { access_token } = req.signedCookies;
  checkToken(access_token, (isValid) => {
    if (!isValid) {
      expCookie(res);
      res.json({ isAuthenticated: false });
      return;
    }
    res.json({ ...req.signedCookies, isAuthenticated: true });
  });
}

export const authLogout = asyncHandler((req, res) => {
  expCookie(res);
  res.json({ success: true });
});

export const updateProfile = asyncHandler((req, res) => {
  const { id_token } = req.signedCookies;
  const decoded = decodeIdToken(id_token);
  decoded.picture = 'https://jwt.io/img/pic_logo.svg';
  delete decoded.exp;
  delete decoded.iat;
  res.cookie('id_token', generateToken(decoded), { httpOnly: true, signed: true });
  res.send(generateToken(decoded));
});


// private methods
function createToken(res, userId, idTokenValue) {
  const id_token = generateToken(idTokenValue);
  const access_token = generateToken({ id: userId });
  res.cookie('access_token', access_token, { httpOnly: true, signed: true });
  res.cookie('id_token', id_token, { httpOnly: true, signed: true });
  res.cookie('user_id', userId, { httpOnly: true, signed: true });
  return {
    access_token,
    id_token,
  }
}

function createUserTokenValue(user) {
  const tokenIdValue = { 
    user_id: user._id, 
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    picture: user.picture,
    name: user.name,
    sub: user.sub || null,
    fb_id: user.fb_id || null,
    mobile_no: user.mobile_no || null,
    gender: user.gender || null,
    birthdate: user.birthdate || null,
    address: user.address || null,
    state: user.state || null,
    zipcode: user.zipcode || null,
    country: user.country || null,
    business_name: user.business_name || null,
    isAdmin: user.isAdmin || null,
  };
  return tokenIdValue;
}

function expCookie(res) {
  const exp = { maxAge: 0 };
  res.cookie('access_token', '', exp);
  res.cookie('id_token', '', exp);
  res.cookie('user_id', '', exp);
}