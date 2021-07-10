import { 
	SUPPORT_LIST_REQUEST, 
	SUPPORT_LIST_SUCCESS, 
	SUPPORT_LIST_FAIL,
	SUPPORT_DETAILS_REQUEST, 
	SUPPORT_DETAILS_SUCCESS, 
	SUPPORT_DETAILS_FAIL } from '../constants/supportConstants'

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