import * as constant from '../constants/authConstants';
import store from 'store';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export function authChanges(auth) {
  const user = auth.id_token ? jwtDecode(auth.id_token) : null;
  store.dispatch({ 
    type: constant.AUTH_DATA, 
    payload: {
      access_token: auth.access_token || null,
      user,
      isAuthenticated: auth.isAuthenticated || false,
    }
  });
}

export async function authLogout() {
  const { data } = await axios.post('/api/users/logout');
  if (data.success) {
    store.dispatch({ type: constant.AUTH_REMOVE_DATA });
  }
}