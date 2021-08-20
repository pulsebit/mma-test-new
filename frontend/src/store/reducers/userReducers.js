import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAIL,
  USER_LOGOUT,

  USER_LIST_REQUEST, 
  USER_LIST_SUCCESS, 
  USER_LIST_FAIL,

  USER_DELETE_REQUEST, 
  USER_DELETE_SUCCESS, 
  USER_DELETE_FAIL,
  USER_DETAILS_REQUEST, 
  USER_DETAILS_SUCCESS, 
  USER_DETAILS_FAIL,
  USER_UPDATE_REQUEST, 
  USER_UPDATE_SUCCESS, 
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
} from '../constants/userConstants'

const initialState = {
   userDocs: {},
   loading: false,
   error: null
}

export function userListReducer(state = initialState, action) {
   switch(action.type) {
      case USER_LIST_REQUEST:
         return {
            ...state,
            userDocs: null,
            loading: true,
         }
      case USER_LIST_SUCCESS:
         return {
            ...state,
            userDocs: action.payload,
            loading: false,
            error: null,
         }
      case USER_LIST_FAIL:
         return {
            ...state,
            error: action.payload
         }
      default: 
         return state;
   }
}


export const userDetailsReducer = (state = { user: {}, loading: false, error: null }, action) => {
   switch(action.type) {
      case USER_DETAILS_REQUEST:
         return { 
            ...state, 
            loading: true 
         }
      case USER_DETAILS_SUCCESS:   
         return  { 
            ...state, 
            loading: false, 
            user: action.payload 
         }
      case USER_DETAILS_FAIL:
         return { 
            ...state, 
            loading: false, 
            error: action.payload 
         }  
      default:
         return state   
   }
}

export const userLoginReducer = (state = { }, action) => {
   switch(action.type) {
          case USER_LOGIN_REQUEST:
             return { loading: true }
          case USER_LOGIN_SUCCESS:   
             return  { loading: false, userInfo: action.payload }
          case USER_LOGIN_FAIL:
             return { loading: false, error: action.payload }  
          case USER_LOGOUT:
             return {  } 
          default:
             return state   
   }
}

export const userDeleteReducer = (state = { }, action) => {
   switch(action.type) {
          case USER_DELETE_REQUEST:
             return { loading: true }
          case USER_DELETE_SUCCESS:   
             return  { loading: false, success: true }
          case USER_DELETE_FAIL:
             return { loading: false, error: action.payload }  
          default:
             return state   
   }
}

export const userUpdateReducer = (state = { user: {} }, action) => {
   switch(action.type) {
          case USER_UPDATE_REQUEST:
             return { loading: true }
          case USER_UPDATE_SUCCESS:   
             return  { loading: false, success: true }
          case USER_UPDATE_FAIL:
             return { loading: false, error: action.payload }  
          case USER_UPDATE_RESET:
            return { loading: false, user: {} }
          default:
             return state   
   }
}