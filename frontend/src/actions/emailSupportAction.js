import axios from 'axios'
import { EMAIL_SUPPORT_CREATE_FAIL, EMAIL_SUPPORT_CREATE_REQUEST, EMAIL_SUPPORT_CREATE_SUCCESS, EMAIL_SUPPORT_LIST_FAIL, EMAIL_SUPPORT_LIST_REQUEST, EMAIL_SUPPORT_LIST_SUCCESS } from '../constants/emailSupportConstants'



export const createEmailSupport = (senderName, senderEmail, emailContent) => async (dispatch) => {
	console.log(senderName, senderEmail, emailContent )
	try {
		dispatch({
			type: EMAIL_SUPPORT_CREATE_REQUEST
		})

		await axios.post(`/api/email-supports/`, {senderName, senderEmail, emailContent} )
	
		dispatch({type: EMAIL_SUPPORT_CREATE_SUCCESS})
	
	} catch( error ) {
		dispatch({
			type: EMAIL_SUPPORT_CREATE_FAIL,
			payload: error.response && error.response.data.message 
				? error.response.data.message 
				: error.message 
		})
	}
}

export const listEmailSupports = () => async (dispatch) => {
	try {
		dispatch({ type: EMAIL_SUPPORT_LIST_REQUEST })

		const { data } = await axios.get('/api/email-supports')

		dispatch({
			type: EMAIL_SUPPORT_LIST_SUCCESS,
			payload: data
		})

	} catch (error) {
		dispatch({
			type: EMAIL_SUPPORT_LIST_FAIL,
			payload: error.response && error.response.data.message 
			? error.response.data.message 
			: error.message
		})
	}
}

// export const listTempProducts = (id) => async (dispatch) => {
// 	try {
// 		dispatch({ type: PRODUCT_TEMP_REQUEST })

// 		const { data } = await axios.get(`/api/products/${id}`)

// 		dispatch({
// 			type: PRODUCT_TEMP_SUCCESS,
// 			payload: data
// 		})

// 	} catch (error) {
// 		dispatch({
// 			type: PRODUCT_TEMP_FAIL,
// 			payload: error.response && error.response.data.message 
// 			? error.response.data.message 
// 			: error.message
// 		})
// 	}
// }


// export const getProductDetails = (id) => async (dispatch) => {
// 	try {
// 		dispatch({ type: PRODUCT_DETAILS_REQUEST })

// 		const { data } = await axios.get(`/api/products/${id}`)

// 		dispatch({
// 			type: PRODUCT_DETAILS_SUCCESS,
// 			payload: data
// 		})

// 	} catch (error) {
// 		dispatch({
// 			type: PRODUCT_DETAILS_FAIL,
// 			payload: error.response && error.response.data.message 
// 			? error.response.data.message 
// 			: error.message
// 		})
// 	}
// }

// export const updateProduct= (product) => async (dispatch, getState) => {
// 	try {
// 		dispatch({
// 			type: PRODUCT_UPDATE_REQUEST
// 		})
		
// 		const { data } = await axios.put(`/api/products/${product._id}/edit`, product)
	
// 		dispatch({type: PRODUCT_UPDATE_SUCCESS})
	
// 		dispatch({
// 		type: PRODUCT_DETAILS_SUCCESS,
// 		payload: data
// 		})
	
// 	} catch( error ) {
// 		dispatch({
// 			type: PRODUCT_UPDATE_FAIL,
// 			payload: error.response && error.response.data.message 
// 				? error.response.data.message 
// 				: error.message 
// 		})
// 	}
// }

// export const deleteProduct = (id) => async (dispatch, getState) => {
// 	try {
// 	  dispatch({
// 		 type: PRODUCT_DELETE_REQUEST
// 	  })
  
// 	 await axios.delete(`/api/products/${id}`)
  
// 	  dispatch({type: PRODUCT_DELETE_SUCCESS})
  
// 	} catch( error ) {
// 	   dispatch({
// 		 type: PRODUCT_DELETE_FAIL,
// 		 payload: error.response && error.response.data.message 
// 				? error.response.data.message 
// 				: error.message 
// 	   })
// 	}
//   }