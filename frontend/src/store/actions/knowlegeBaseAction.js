import axios from 'axios'
import { KNOWLEDGE_BASE_CREATE_FAIL, KNOWLEDGE_BASE_CREATE_REQUEST, KNOWLEDGE_BASE_CREATE_SUCCESS, KNOWLEDGE_BASE_DELETE_FAIL, KNOWLEDGE_BASE_DELETE_REQUEST, KNOWLEDGE_BASE_DELETE_SUCCESS, KNOWLEDGE_BASE_DETAILS_FAIL, KNOWLEDGE_BASE_DETAILS_REQUEST, KNOWLEDGE_BASE_DETAILS_SUCCESS, KNOWLEDGE_BASE_LIST_FAIL, KNOWLEDGE_BASE_LIST_REQUEST, KNOWLEDGE_BASE_LIST_SUCCESS, KNOWLEDGE_BASE_UPDATE_FAIL, KNOWLEDGE_BASE_UPDATE_REQUEST, KNOWLEDGE_BASE_UPDATE_SUCCESS } from '../constants/knowledgeBaseConstant'

export const listKnowledgeBase = () => async (dispatch) => {
    try {
       dispatch({type: KNOWLEDGE_BASE_LIST_REQUEST})
 
       const { data } = await axios.get('/api/knowledge-base')
 
       dispatch({
          type: KNOWLEDGE_BASE_LIST_SUCCESS,
          payload: data
       })
    } catch (error) {
       dispatch({
          type: KNOWLEDGE_BASE_LIST_FAIL,
          payload: error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message
       })
    }
 }

 export const createKnowledgeBase = (problem_description, solution, category, resolve_by) => async (dispatch, getState) => {
   try {
     dispatch({
        type: KNOWLEDGE_BASE_CREATE_REQUEST
     })
     const {
      userLogin: { userInfo }
   } = getState()

   console.log(userInfo)

   const created_by = userInfo._id

      await axios.post(`/api/knowledge-base/`, {problem_description, solution, category, resolve_by, created_by} )

      dispatch({type: KNOWLEDGE_BASE_CREATE_SUCCESS})
 
   } catch( error ) {
      dispatch({
        type: KNOWLEDGE_BASE_CREATE_FAIL,
        payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
 }

 export const getKnowledgeBaseDetails = (id) => async (dispatch) => {
   try { 
      
      dispatch({ type: KNOWLEDGE_BASE_DETAILS_REQUEST })

      const { data } = await axios.get(`/api/knowledge-base/${id}`)

      dispatch({ 
         type: KNOWLEDGE_BASE_DETAILS_SUCCESS,
         payload: data 
      })

   } catch (error) {
       dispatch({
            type: KNOWLEDGE_BASE_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
       })
   }
}

 export const updateKnowledgeBase= (knowledgeBase) => async (dispatch, getState) => {
   try {
     dispatch({
        type: KNOWLEDGE_BASE_UPDATE_REQUEST
     })
     
     const { data } = await axios.put(`/api/knowledge-base/${knowledgeBase._id}`, knowledgeBase)
 
     dispatch({type: KNOWLEDGE_BASE_UPDATE_SUCCESS})

     dispatch({
       type: KNOWLEDGE_BASE_UPDATE_SUCCESS,
       payload: data
     })
 
   } catch( error ) {
      dispatch({
        type: KNOWLEDGE_BASE_UPDATE_FAIL,
        payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
 }

export const deleteKnowledgeBase = (id) => async (dispatch, getState) => {
try {
   dispatch({
      type: KNOWLEDGE_BASE_DELETE_REQUEST
   })

   await axios.delete(`/api/knowledge-base/${id}`)

   dispatch({type: KNOWLEDGE_BASE_DELETE_SUCCESS})

} catch( error ) {
   dispatch({
      type: KNOWLEDGE_BASE_DELETE_FAIL,
      payload: error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message 
   })
}
}