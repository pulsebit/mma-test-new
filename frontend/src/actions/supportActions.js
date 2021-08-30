import axios from 'axios'
import { 
	SUPPORT_LIST_REQUEST, 
	SUPPORT_LIST_SUCCESS, 
	SUPPORT_LIST_FAIL,
	SUPPORT_DETAILS_REQUEST, 
	SUPPORT_DETAILS_SUCCESS, 
	SUPPORT_DETAILS_FAIL, 
   SUPPORT_CREATE_SUCCESS,
   SUPPORT_CREATE_REQUEST,
   SUPPORT_CREATE_FAIL,
   SUPPORT_UPDATE_REQUEST,
   SUPPORT_UPDATE_SUCCESS,
   SUPPORT_UPDATE_FAIL,
   SUPPORT_DELETE_SUCCESS,
   SUPPORT_DELETE_FAIL,
   SUPPORT_DELETE_REQUEST,
   SUPPORT_LIST_BY_CREATOR_REQUEST,
   SUPPORT_LIST_BY_CREATOR_SUCCESS,
   SUPPORT_LIST_BY_CREATOR_FAIL
} from '../constants/supportConstants'


export const listSupports = () => async (dispatch, getState) => {
   try {
      dispatch({ type: SUPPORT_LIST_REQUEST })

   const {
         userLogin: { userInfo }
   } = getState()

   const config = {
      headers: {
      Authorization: `Bearer ${userInfo.token}`,
      },
   }

      const { data } = await axios.get('/api/supports', config)

      dispatch({
         type: SUPPORT_LIST_SUCCESS,
         payload: data
      })


   } catch(error) {
      dispatch({
         type: SUPPORT_LIST_FAIL,
         payload: error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message
      })
   }
}

export const getSupportListByCreator  = (id) => async (dispatch) => {
   try { 
      dispatch({ type: SUPPORT_LIST_BY_CREATOR_REQUEST })

      const { data } = await axios.get(`/api/client-supports/${id}` )

      dispatch({ 
         type: SUPPORT_LIST_BY_CREATOR_SUCCESS,
         payload: data 
      })

   } catch (error) {
       dispatch({
            type: SUPPORT_LIST_BY_CREATOR_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
       })
   }
}

export const getSupportDetails = (id) => async (dispatch) => {
   try { 
      
      dispatch({ type: SUPPORT_DETAILS_REQUEST })

      const { data } = await axios.get(`/api/supports/${id}`)

      dispatch({ 
         type: SUPPORT_DETAILS_SUCCESS,
         payload: data 
      })

   } catch (error) {
       dispatch({
            type: SUPPORT_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
       })
   }
}

export const createSupport = (client, ticket_no, problem_description, status, priority, category, assignee) => async (dispatch, getState) => {
   try {
      dispatch({
         type: SUPPORT_CREATE_REQUEST
      })

      const {
         userLogin: { userInfo }
      } = getState()

      
      const created_by = userInfo._id
      if (userInfo.isAdmin == true) {
         console.log("admin")
         await axios.post(`/api/supports/`, {client, ticket_no, problem_description, status, priority, category, assignee, created_by} )
      }

      if (userInfo.isAdmin == false) {
         console.log("false")
         
         await axios.post(`/api/supports/`, {client, ticket_no, problem_description, status, priority, category, assignee, created_by} )
      }

      dispatch({type: SUPPORT_CREATE_SUCCESS})

   } catch( error ) {
      dispatch({
         type: SUPPORT_CREATE_FAIL,
         payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
}

export const updateSupport = (support) => async (dispatch, getState) => {
   
   console.log("updateSupport")
   console.log(support)
   try {
     dispatch({
        type: SUPPORT_UPDATE_REQUEST
     })
     
     const { data } = await axios.put(`/api/supports/${support._id}/`, support)
 
     dispatch({type: SUPPORT_UPDATE_SUCCESS})

     dispatch({
       type: SUPPORT_UPDATE_SUCCESS,
       payload: data
     })
 
   } catch( error ) {
      dispatch({
        type: SUPPORT_UPDATE_FAIL,
        payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
}

export const deleteSupport = (id) => async (dispatch, getState) => {
   try {
     dispatch({
        type: SUPPORT_DELETE_REQUEST
     })
 
      await axios.delete(`/api/supports/${id}`)
 
      dispatch({type: SUPPORT_DELETE_SUCCESS})
 
   } catch( error ) {
      dispatch({
        type: SUPPORT_DELETE_FAIL,
        payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
}