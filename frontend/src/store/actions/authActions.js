import * as constant from '../constants/authConstants';
import store from 'store';
import axios from 'axios';

export function authChanges(auth) {
  store.dispatch({ 
    type: constant.AUTH_DATA, 
    payload: {
      user_id: auth.user_id || null,
      access_token: auth.access_token || null,
      id_token: auth.id_token || null,
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