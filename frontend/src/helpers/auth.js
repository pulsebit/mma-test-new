import store from 'store';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

let auth = {};

store.subscribe(() => {
  const { auth: _auth } = store.getState();
  const profile = _auth.id_token ? jwt_decode(_auth.id_token) : {};
  auth.userId = _auth.user_id;
  auth.access_token = _auth.access_token;
  auth.id_token = _auth.id_token;
  auth.isAuthenticated = _auth.isAuthenticated;
  auth.profile = profile;
});

console.log({ profile: auth.profile })

export function onAuthStateChanged(cb) {
  axios.post('/onAuthStateChanged')
    .then(res => {
      cb(res.data)
    })
    .catch(err => {
      cb({})
    });
}

export {
  auth
};