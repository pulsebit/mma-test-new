import axios from 'axios'
import { CHECKOUT_CREATE_FAIL, CHECKOUT_CREATE_REQUEST, CHECKOUT_CREATE_SUCCESS } from '../constants/checkoutConstant'

export const createCheckout = (token, paymentPlan) => async (dispatch) => {
    try {
        dispatch({type: CHECKOUT_CREATE_REQUEST})
        await axios.post(`/api/checkout`, {token, paymentPlan} )
        dispatch({ type: CHECKOUT_CREATE_SUCCESS })
    } catch (error) {
        dispatch({
            type: CHECKOUT_CREATE_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
}