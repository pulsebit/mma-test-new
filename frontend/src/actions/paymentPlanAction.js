import axios from 'axios'
import { 
   PAYMENTPLAN_LIST_REQUEST, 
   PAYMENTPLAN_LIST_SUCCESS, 
   PAYMENTPLAN_LIST_FAIL,
   PAYMENTPLAN_UPDATE_REQUEST, 
   PAYMENTPLAN_UPDATE_SUCCESS, 
   PAYMENTPLAN_DETAILS_SUCCESS,
   PAYMENTPLAN_UPDATE_FAIL
} from '../constants/paymentPlanConstant'

export const listPaymentPlans = () => async (dispatch) => {
   try {
      dispatch({type: PAYMENTPLAN_LIST_REQUEST})

      const { data } = await axios.get('/api/paymentplans')

      dispatch({
         type: PAYMENTPLAN_LIST_SUCCESS,
         payload: data
      })
   } catch (error) {
      dispatch({
         type: PAYMENTPLAN_LIST_FAIL,
         payload: error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message
      })
   }
}




export const listPaymentDetails = (id) => async (dispatch) => {
   try {
       dispatch({ type: PAYMENTPLAN_LIST_REQUEST })

       const { data } = await axios.get(`/api/paymentplans/${id}`)

       dispatch({
               type: PAYMENTPLAN_LIST_SUCCESS,
               payload: data
       })

   } catch (error) {
       dispatch({
            type: PAYMENTPLAN_LIST_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
       })
   }
}

export const updatePaymentPlan = (user) => async (dispatch, getState) => {
   try {
     dispatch({
        type: PAYMENTPLAN_UPDATE_REQUEST
     })
 
     const {
        userLogin: { userInfo }
     } = getState()
 
     const config = {
        headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${userInfo.token}`,
        },
     }

     const { data } = await axios.put(`/api/users/${user._id}`, user, config)
 
     dispatch({type: PAYMENTPLAN_UPDATE_SUCCESS})

     dispatch({
       type: PAYMENTPLAN_DETAILS_SUCCESS,
       payload: data
     })
 
   } catch( error ) {
      dispatch({
        type: PAYMENTPLAN_UPDATE_FAIL,
        payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
 }