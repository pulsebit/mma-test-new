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
    case constant.CHANGE_PROFILE:
      return {
        ...state,
        id_token: action.payload,
      }
    default:
      return state;
  }
}

export function authMessage(state = { message: null, type: null }, action) {
  switch(action.type) {
    case constant.CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
      }
    case constant.REMOVE_MESSAGE:
      return {
        ...state,
        message: null,
        type: null,
      }
    default:
      return state;
  }
}