import * as constant from '../constants/authConstants';

const initialState = {
  userId: null,
  accessToken: null,
  profile: null,
};

export function authReducer(state = initialState, action) {
  switch(action.type) {
    case constant.AUTH_DATA:
      return {
        ...state,
        userId: action.payload.userId,
        accessToken: action.payload.accessToken,
        profile: action.payload.profile,
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