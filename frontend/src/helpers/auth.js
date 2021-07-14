import store from 'store';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

let auth = {};

store.subscribe(() => {
  const { auth: _auth } = store.getState();
  auth.userId = _auth.userId;
  auth.accessToken = _auth.accessToken;
  auth.profile = _auth.profile;
});

export function isAuthenticated() {
  if (auth.accessToken) {
    const { exp } = jwt_decode(auth.accessToken);
    if (Date.now() >= exp * 1000) {
      return false;
    }
    return true;
  }
  return false;
}

export function onAuthStateChanged(cb) {
  axios.get('/onAuthStateChanged')
    .then(res => {
      cb(res.data)
    })
    .catch(err => {
      cb(null)
    });
}

export {
  auth
};