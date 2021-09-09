import { EMAIL_SUPPORT_CREATE_FAIL, EMAIL_SUPPORT_CREATE_REQUEST, EMAIL_SUPPORT_CREATE_RESET, EMAIL_SUPPORT_CREATE_SUCCESS, EMAIL_SUPPORT_LIST_FAIL, EMAIL_SUPPORT_LIST_REQUEST, EMAIL_SUPPORT_LIST_SUCCESS } from "../constants/emailSupportConstants"

 
 export const emailSupportCreateReducer = (state = {}, action) => {
    switch(action.type) {
           case EMAIL_SUPPORT_CREATE_REQUEST:
              return { loading: true }
           case EMAIL_SUPPORT_CREATE_SUCCESS:   
              return  { loading: false, success: true }
           case EMAIL_SUPPORT_CREATE_FAIL:
              return { loading: false, error: action.payload }  
          case EMAIL_SUPPORT_CREATE_RESET:
             return { loading: false, state: {} } 
           default:
              return state   
    }
 }
 
 export const emailSupportListReducer = (state = { emailSupports: [] }, action) => {
    switch(action.type) {
           case EMAIL_SUPPORT_LIST_REQUEST:
              return { loading: true, ...state }
           case EMAIL_SUPPORT_LIST_SUCCESS:   
              return  { loading: false, emailSupports: action.payload }
           case EMAIL_SUPPORT_LIST_FAIL:
              return { loading: false, error: action.payload }   
           default:
              return state   
    }
 }
 
//  export const productDetailsReducer = (state = { product: {} }, action) => {
 
//     switch(action.type) {
//            case PRODUCT_DETAILS_REQUEST:
//               return { loading: true, product: {} }
//            case PRODUCT_DETAILS_SUCCESS:   
//               return  { loading: false, product: action.payload }
//            case PRODUCT_DETAILS_FAIL:
//               return { loading: false, error: action.payload }   
//            default:
//               return state   
//     }
//  }
 
//  export const productUpdateReducer = (state = { product: [] }, action) => {
//     switch(action.type) {
//            case PRODUCT_UPDATE_REQUEST:
//               return { loading: true }
//            case PRODUCT_UPDATE_SUCCESS:   
//               return  { loading: false, success: true }
//            case PRODUCT_UPDATE_FAIL:
//               return { loading: false, error: action.payload } 
//               case PRODUCT_UPDATE_RESET:
//              return { loading: false, state: {} }  
//            default:
//               return state   
//     }
//  }
 
//  export const productDeleteReducer = (state = { }, action) => {
//     switch(action.type) {
//            case PRODUCT_DELETE_REQUEST:
//               return { loading: true }
//            case PRODUCT_DELETE_SUCCESS:
//               return  { loading: false, success: true }
//            case PRODUCT_DELETE_FAIL:
//               return { loading: false, error: action.payload }  
//               case PRODUCT_DELETE_RESET:
//              return { loading: false, state: {} } 
//            default:
//               return state   
//     }
//  }