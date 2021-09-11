import { ACCESS_CREATE_FAIL, ACCESS_CREATE_REQUEST, ACCESS_CREATE_RESET, ACCESS_CREATE_SUCCESS, ACCESS_DETAILS_FAIL, ACCESS_DETAILS_REQUEST, ACCESS_DETAILS_SUCCESS, ACCESS_LIST_BY_CREATOR_FAIL, ACCESS_LIST_BY_CREATOR_REQUEST, ACCESS_LIST_BY_CREATOR_SUCCESS } from "../constants/accessConstants"

export const accessCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case ACCESS_CREATE_REQUEST:
            return { loading: true }
        case ACCESS_CREATE_SUCCESS:   
            return  { loading: false, success: true }
        case ACCESS_CREATE_FAIL:
            return { loading: false, error: action.payload } 
        case ACCESS_CREATE_RESET:
            return { loading: false, state: {} } 
        default:
            return state   
    }
}
export const accessListByCreatorReducer = (state = { accesses: [] }, action) => {
    switch(action.type) {
        case ACCESS_LIST_BY_CREATOR_REQUEST:
            return { loading: true, accesses: [] }
        case ACCESS_LIST_BY_CREATOR_SUCCESS:   
            return  { loading: false, accesses: action.payload }
        case ACCESS_LIST_BY_CREATOR_FAIL:
            return { loading: false, error: action.payload }   
        default:
            return state   
    }
 }

export const accessDetailsReducer = (state = { access: {} }, action) => {
    switch(action.type) {
        case ACCESS_DETAILS_REQUEST:
            return { loading: true, access: {} }
        case ACCESS_DETAILS_SUCCESS:   
            return  { loading: false, access: action.payload }
        case ACCESS_DETAILS_FAIL:
            return { loading: false, error: action.payload }   
        default:
            return state   
    }
}