import * as constant from '../constants/authConstants';

const initialState = {
  user_id: null,
  access_token: null,
  id_token: null,
  isAuthenticated: false,
  signInMethod: null,
};

export function authReducer(state = initialState, action) {
  switch(action.type) {
    case constant.AUTH_DATA:
      return {
        ...state,
        user_id: action.payload.user_id,
        access_token: action.payload.access_token,
        id_token: action.payload.id_token,
        isAuthenticated: action.payload.isAuthenticated,
        signInMethod: action.payload.signInMethod,
      };
    case constant.AUTH_REMOVE_DATA:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state;
  }
}