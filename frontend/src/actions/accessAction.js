import axios from 'axios'
import { ACCESS_CREATE_FAIL, ACCESS_CREATE_REQUEST, ACCESS_CREATE_SUCCESS, ACCESS_DELETE_FAIL, ACCESS_DELETE_REQUEST, ACCESS_DELETE_SUCCESS, ACCESS_DETAILS_FAIL, ACCESS_DETAILS_REQUEST, ACCESS_DETAILS_SUCCESS, ACCESS_LIST_BY_CREATOR_FAIL, ACCESS_LIST_BY_CREATOR_REQUEST, ACCESS_LIST_BY_CREATOR_SUCCESS, ACCESS_UPDATE_FAIL, ACCESS_UPDATE_REQUEST, ACCESS_UPDATE_SUCCESS } from '../constants/accessConstants'

export const createAccess = ( type, url, loginUrl, username, password, notes ) => async (dispatch, getState) => {
    
    const {
        userLogin: { userInfo }
     } = getState()

     const creator = userInfo._id

	try {
		dispatch({
			type: ACCESS_CREATE_REQUEST
		})
		await axios.post(`/api/access/`, {creator, type, url, loginUrl, username, password, notes} )
	
		dispatch({type: ACCESS_CREATE_SUCCESS})
	
	} catch( error ) {
		dispatch({
			type: ACCESS_CREATE_FAIL,
			payload: error.response && error.response.data.message 
				? error.response.data.message 
				: error.message 
		})
	}
}

export const getAccessListByCreator  = (id) => async (dispatch) => {
    try { 
       console.log(id)
       dispatch({ type: ACCESS_LIST_BY_CREATOR_REQUEST })
 
       const { data } = await axios.get(`/api/access/creator/${id}`)
 
       dispatch({ 
          type: ACCESS_LIST_BY_CREATOR_SUCCESS,
          payload: data 
       })
 
    } catch (error) {
        dispatch({
             type: ACCESS_LIST_BY_CREATOR_FAIL,
             payload: error.response && error.response.data.message 
             ? error.response.data.message 
             : error.message
        })
    }
 }

 export const getAccessDetails = (id) => async (dispatch) => {
   try { 
      
      dispatch({ type: ACCESS_DETAILS_REQUEST })

      const { data } = await axios.get(`/api/access/${id}`)

      dispatch({ 
         type: ACCESS_DETAILS_SUCCESS,
         payload: data 
      })

   } catch (error) {
       dispatch({
            type: ACCESS_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
       })
   }
}

export const updateAccess= (access) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ACCESS_UPDATE_REQUEST
		})
		
		const { data } = await axios.put(`/api/access/${access._id}`, access)
	
		dispatch({type: ACCESS_UPDATE_SUCCESS})
	
		dispatch({
		type: ACCESS_UPDATE_SUCCESS,
		payload: data
		})
	
	} catch( error ) {
		dispatch({
			type: ACCESS_UPDATE_FAIL,
			payload: error.response && error.response.data.message 
				? error.response.data.message 
				: error.message 
		})
	}
}

export const deleteAccess = (id) => async (dispatch, getState) => {
	try {
	  dispatch({
		 type: ACCESS_DELETE_REQUEST
	  })
  
	 await axios.delete(`/api/access/${id}`)
  
	  dispatch({type: ACCESS_DELETE_SUCCESS})
  
	} catch( error ) {
	   dispatch({
		 type: ACCESS_DELETE_FAIL,
		 payload: error.response && error.response.data.message 
				? error.response.data.message 
				: error.message 
	   })
	}
  }