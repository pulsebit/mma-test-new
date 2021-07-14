import * as constant from '../constants/authConstants';
import store from 'store';

export function authChanges(auth) {
  store.dispatch({ 
    type: constant.AUTH_DATA, 
    payload: {
      userId: auth.userId,
      accessToken: auth.accessToken,
      profile: auth.profile,
    }
  });
}