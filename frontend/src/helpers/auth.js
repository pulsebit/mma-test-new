import axios from 'axios';

export function onAuthStateChanged(cb) {
  axios.post('/onAuthStateChanged')
    .then(res => {
      cb(res.data)
    })
    .catch(err => {
      cb({})
    });
}