import jwt from 'jsonwebtoken'

const generateToken = (data) => {
   return jwt.sign({ ...data }, process.env.JWT_SECRET, {
   	  expiresIn: '1d'
   })
} 

export function checkToken(accessToken, cb) {
  if (!accessToken) {
    cb(false);
    return;
  }
  jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      cb(false);
			return;
    }
		cb(true);
  });
}

export function decodeIdToken(idToken) {
  return jwt.verify(idToken, process.env.JWT_SECRET)
}

export default generateToken