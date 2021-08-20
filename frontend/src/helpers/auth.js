import axios from 'axios';

export function onAuthStateChanged(cb) {
  axios.post('/token')
    .then(res => {
      cb(res.data)
    })
    .catch(err => {
      cb({})
    });
}