import User from '../models/userModel.js'
import generateToken, { checkToken, decodeIdToken } from '../utils/generateToken.js';
import asyncHandler from 'express-async-handler';
import { verify } from '../utils/google.js';
import { uploadImageBase64 } from '../utils/fs.js';

export const authFb = asyncHandler(async (req, res) => {
  const { email, userID, picture, name } = req.body;
  let user = await User.findOne({ fb_id: userID });
  if (!user && email) {
    user = await User.findOne({ email });
    if (user) {
      res.json({ 
        error: `Can’t create account with email ${email}. Email already in used.`,
      });
      return;
    }
    user = await User.create({
      fb_id: userID, email, picture, name,
    });
  }
  else if (!user && !email) {
    res.json({ 
      error: `Can’t create account. No Email provided.`,
    });
    return;
  }
  const tokenIdValue = createUserTokenValue(user);
  const createdToken = createToken(res, user._id, tokenIdValue);
  res.json({
    ...createdToken,
    isAuthenticated: true,
  });
});

export const authSignin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user && (await user.matchPassword(password)) ) {
    const tokenIdValue = createUserTokenValue(user);
    const createdToken = createToken(res, user._id, tokenIdValue);
    res.json({
      ...createdToken,
      success: true,
      isAuthenticated: true,
    });
  } else {
    res.json({ success: false, message: 'Passwords does not match.' });
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
  const createdToken = createToken(res, user._id, tokenIdValue);
  res.json({
    ...createdToken,
    isAuthenticated: true,
  });
});

export const authToken = asyncHandler(async (req, res) => {
  const { access_token } = req.signedCookies;
  checkToken(access_token, async (isValid) => {
    if (!isValid) {
      expCookie(res);
      res.json({ isAuthenticated: false });
      return;
    }
    const { id } = decodeIdToken(access_token);
    const user = await User.findById(id, { password: 0 });
    const tokenIdValue = createUserTokenValue(user);
    const { id_token } = createToken(res, user._id, tokenIdValue);
    res.json({ 
      id_token,
      access_token, 
      isAuthenticated: true 
    });
  });
});

export const authLogout = asyncHandler((req, res) => {
  expCookie(res);
  res.json({ success: true });
});

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  let user = await User.findOne({ email });
  if (password !== confirm_password) {
    res.json({ success: false, message: 'Passwords does not match.' });
    return;
  }
  if (user) {
    res.json({ success: false, message: 'User already exists.' });
    return;
  }
  user = await User.create({ name, email, password });
  const tokenIdValue = createUserTokenValue(user);
  const createdToken = createToken(res, user._id, tokenIdValue);
  res.json({
    ...createdToken,
    success: true,
    isAuthenticated: true,
  });
});

export const updateProfile = asyncHandler(async (req, res) => {
  let user = await User.findByIdAndUpdate(req.user._id, { ...req.body });
  user = await User.findById(req.user._id, { password: 0 });
  res.send(user);
});

export const updateProfilePicture = asyncHandler(async (req, res) => {
  let user = await User.findById(req.user._id);
  const picture = req.body.picture ? uploadImageBase64(req.body.picture, 'users') : user.picture;
  await User.findByIdAndUpdate(req.user._id, { picture });
  res.send(picture);
});

export const checkEmailIfExists = asyncHandler(async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.json({
      message: 'Email already exists.',
      isExists: true,
    });
    return;
  }
  res.json({
    message: null,
    isExists: false,
  });
});


// private methods
function createToken(res, userId, idTokenValue) {
  const id_token = generateToken(idTokenValue);
  const access_token = generateToken({ id: userId });
  res.cookie('access_token', access_token, { 
    httpOnly: true, 
    signed: true,
    path: '/token'
  });
  return {
    access_token,
    id_token,
  }
}

function createUserTokenValue(user) {
  const tokenIdValue = { 
    user_id: user._id, 
    email: user.email || null,
    first_name: user.first_name || null,
    last_name: user.last_name || null,
    picture: user.picture || null,
    name: user.name || null,
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
  res.cookie('access_token', '', { path: '/token', maxAge: 0 });
}
