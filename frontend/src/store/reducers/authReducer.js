import * as constant from '../constants/authConstants';

const initialState = {
  user: null,
  access_token: null,
  isAuthenticated: false,
};

export function authReducer(state = initialState, action) {
  switch(action.type) {
    case constant.AUTH_DATA:
      return {
        ...state,
        access_token: action.payload.access_token,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case constant.AUTH_REMOVE_DATA:
      return  initialState;
    case constant.CHANGE_PROFILE:
      return {
        ...state,
        user: action.payload,
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