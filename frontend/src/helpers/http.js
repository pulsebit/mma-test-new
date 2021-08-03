import store from 'store';
import axios from 'axios';

const { auth } = store.getState();
const http = axios.create({});

http.defaults.headers.common['Authorization'] = `Bearer ${auth.access_token}`;;

export default http;