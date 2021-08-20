import axios from 'axios'
import { 
	PRODUCT_CREATE_REQUEST, 
	PRODUCT_CREATE_SUCCESS, 
	PRODUCT_CREATE_FAIL,
	PRODUCT_LIST_REQUEST, 
	PRODUCT_LIST_SUCCESS, 
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST, 
	PRODUCT_DETAILS_SUCCESS, 
	PRODUCT_DETAILS_FAIL,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL
} from '../constants/productConstants'
import { PRODUCT_TEMP_FAIL, PRODUCT_TEMP_REQUEST, PRODUCT_TEMP_SUCCESS } from '../constants/tempProductConstant'



export const createProduct = (name, image, brand, category, description, numReviews, price, countInStock) => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_CREATE_REQUEST
		})
		await axios.post(`/api/products/`, {name, image, brand, category, description, numReviews, price, countInStock} )
	
		dispatch({type: PRODUCT_CREATE_SUCCESS})
	
	} catch( error ) {
		dispatch({
			type: PRODUCT_CREATE_FAIL,
			payload: error.response && error.response.data.message 
				? error.response.data.message 
				: error.message 
		})
	}
}

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_LIST_REQUEST })

		const { data } = await axios.get('/api/products')

		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data
		})

	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload: error.response && error.response.data.message 
			? error.response.data.message 
			: error.message
		})
	}
}

export const listTempProducts = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_TEMP_REQUEST })

		const { data } = await axios.get(`/api/products/${id}`)

		dispatch({
			type: PRODUCT_TEMP_SUCCESS,
			payload: data
		})

	} catch (error) {
		dispatch({
			type: PRODUCT_TEMP_FAIL,
			payload: error.response && error.response.data.message 
			? error.response.data.message 
			: error.message
		})
	}
}


export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST })

		const { data } = await axios.get(`/api/products/${id}`)

		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data
		})

	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: error.response && error.response.data.message 
			? error.response.data.message 
			: error.message
		})
	}
}

export const updateProduct= (product) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_UPDATE_REQUEST
		})
		
		const { data } = await axios.put(`/api/products/${product._id}/edit`, product)
	
		dispatch({type: PRODUCT_UPDATE_SUCCESS})
	
		dispatch({
		type: PRODUCT_DETAILS_SUCCESS,
		payload: data
		})
	
	} catch( error ) {
		dispatch({
			type: PRODUCT_UPDATE_FAIL,
			payload: error.response && error.response.data.message 
				? error.response.data.message 
				: error.message 
		})
	}
}

export const deleteProduct = (id) => async (dispatch, getState) => {
	try {
	  dispatch({
		 type: PRODUCT_DELETE_REQUEST
	  })
  
	 await axios.delete(`/api/products/${id}`)
  
	  dispatch({type: PRODUCT_DELETE_SUCCESS})
  
	} catch( error ) {
	   dispatch({
		 type: PRODUCT_DELETE_FAIL,
		 payload: error.response && error.response.data.message 
				? error.response.data.message 
				: error.message 
	   })
	}
  }