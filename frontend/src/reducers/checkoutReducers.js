import { CHECKOUT_CREATE_FAIL, CHECKOUT_CREATE_REQUEST, CHECKOUT_CREATE_RESET, CHECKOUT_CREATE_SUCCESS } from "../constants/checkoutConstant"

export const checkoutCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case CHECKOUT_CREATE_REQUEST:
            return { loading: true }
        case CHECKOUT_CREATE_SUCCESS:   
            return  { loading: false, success: true }
        case CHECKOUT_CREATE_FAIL  :
            return { loading: false, error: action.payload } 
        case CHECKOUT_CREATE_RESET:
            return { loading: false, state: {} } 
        default:
            return state   
    }
}