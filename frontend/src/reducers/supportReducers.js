import { 
	SUPPORT_LIST_REQUEST, 
	SUPPORT_LIST_SUCCESS, 
	SUPPORT_LIST_FAIL,
	SUPPORT_DETAILS_REQUEST, 
	SUPPORT_DETAILS_SUCCESS, 
	SUPPORT_DETAILS_FAIL, 
   SUPPORT_CREATE_REQUEST,
   SUPPORT_CREATE_SUCCESS,
   SUPPORT_CREATE_FAIL,
   SUPPORT_UPDATE_RESET,
   SUPPORT_UPDATE_REQUEST,
   SUPPORT_UPDATE_SUCCESS,
   SUPPORT_UPDATE_FAIL,
   SUPPORT_DELETE_REQUEST,
   SUPPORT_DELETE_SUCCESS,
   SUPPORT_DELETE_FAIL} from '../constants/supportConstants'

export const supportListReducer = (state = {supports: []}, action) => {
   switch(action.type) {
      case SUPPORT_LIST_REQUEST:
         return { loading: true, ...state}
      case SUPPORT_LIST_SUCCESS:
         return { loading: false, supports: action.payload } 
      case SUPPORT_LIST_FAIL:
         return { loading: false, error: action.payload }   
      default:
         return state     
   }

}

export const supportDetailsReducer = (state = { support: {} }, action) => {
   switch(action.type) {
         case SUPPORT_DETAILS_REQUEST:
            return { loading: true, support: {} }
         case SUPPORT_DETAILS_SUCCESS:   
            return  { loading: false, support: action.payload }
         case SUPPORT_DETAILS_FAIL:
            return { loading: false, error: action.payload }   
         default:
            return state   
   }
}

export const supportCreateReducer = (state = {}, action) => {
   switch(action.type) {
          case SUPPORT_CREATE_REQUEST:
             return { loading: true }
          case SUPPORT_CREATE_SUCCESS:   
             return  { loading: false, success: true }
          case SUPPORT_CREATE_FAIL:
             return { loading: false, error: action.payload }  
          default:
             return state   
   }
}

export const suppportUpdateReducer = (state = { support: {} }, action) => {
   switch(action.type) {
      case SUPPORT_UPDATE_REQUEST:
         return { loading: true }
      case SUPPORT_UPDATE_SUCCESS:   
         return  { loading: false, success: true }
      case SUPPORT_UPDATE_FAIL:
         return { loading: false, error: action.payload }
      case SUPPORT_UPDATE_RESET:
         return { loading: false, support: {} }  
      default:
         return state   
   }
}

export const supportDeleteReducer = (state = { }, action) => {
   switch(action.type) {
          case SUPPORT_DELETE_REQUEST:
             return { loading: true }
          case SUPPORT_DELETE_SUCCESS:
             return  { loading: false, success: true }
          case SUPPORT_DELETE_FAIL:
             return { loading: false, error: action.payload }  
          default:
             return state   
   }
}