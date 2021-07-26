import axios from 'axios'
import { 
   PAYMENTPLAN_LIST_REQUEST, 
   PAYMENTPLAN_LIST_SUCCESS, 
   PAYMENTPLAN_LIST_FAIL,
   PAYMENTPLAN_UPDATE_REQUEST, 
   PAYMENTPLAN_UPDATE_SUCCESS, 
   PAYMENTPLAN_DETAILS_SUCCESS,
   PAYMENTPLAN_UPDATE_FAIL,
   PAYMENTPLAN_DELETE_REQUEST,
   PAYMENTPLAN_DELETE_SUCCESS,
   PAYMENTPLAN_DELETE_FAIL,
   PAYMENTPLAN_UPDATE_RESET,
   PAYMENTPLAN_CREATE_REQUEST,
   PAYMENTPLAN_CREATE_SUCCESS,
   PAYMENTPLAN_CREATE_FAIL,
   PAYMENTPLAN_DETAILS_FAIL,
   PAYMENTPLAN_DETAILS_REQUEST
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

export const getPaymentPlanDetails = (id) => async (dispatch) => {
   try { 
      
      dispatch({ type: PAYMENTPLAN_DETAILS_REQUEST })

       const { data } = await axios.get(`/api/paymentplans/${id}`)
       console.log(data)
      dispatch({
         type: PAYMENTPLAN_DETAILS_SUCCESS,
         payload: data
      })

   } catch (error) {
       dispatch({
            type: PAYMENTPLAN_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
       })
   }
}

export const updatePaymentPlan= (paymentPlan) => async (dispatch, getState) => {
   try {
     dispatch({
        type: PAYMENTPLAN_UPDATE_REQUEST
     })
     
     const { data } = await axios.put(`/api/paymentplans/${paymentPlan._id}/edit`, paymentPlan)
 
     dispatch({type: PAYMENTPLAN_UPDATE_SUCCESS})

     dispatch({
       type: PAYMENTPLAN_UPDATE_SUCCESS,
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
 

 export const deletePaymentPlan = (id) => async (dispatch, getState) => {
   try {
     dispatch({
        type: PAYMENTPLAN_DELETE_REQUEST
     })
 
    await axios.delete(`/api/paymentplans/${id}`)
 
     dispatch({type: PAYMENTPLAN_DELETE_SUCCESS})
 
   } catch( error ) {
      dispatch({
        type: PAYMENTPLAN_DELETE_FAIL,
        payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
 }

 export const createPaymentPlan = (name, price, image, description, features) => async (dispatch) => {
   try {
     dispatch({
        type: PAYMENTPLAN_CREATE_REQUEST
     })
      await axios.post(`/api/paymentplans/`, {name, price, image, description, features} )

      dispatch({type: PAYMENTPLAN_CREATE_SUCCESS})
 
   } catch( error ) {
      dispatch({
        type: PAYMENTPLAN_CREATE_FAIL,
        payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
 }