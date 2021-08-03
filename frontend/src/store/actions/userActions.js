import axios from 'axios'
import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LIST_REQUEST, 
  USER_LIST_SUCCESS, 
  USER_LIST_FAIL,  
  USER_LIST_RESET,
  USER_DELETE_REQUEST, 
  USER_DELETE_SUCCESS, 
  USER_DELETE_FAIL,
  USER_DETAILS_REQUEST, 
  USER_DETAILS_SUCCESS, 
  USER_DETAILS_FAIL, 
  USER_UPDATE_REQUEST, 
  USER_UPDATE_SUCCESS, 
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET
} from '../constants/userConstants'

import store from 'store'

const token = 'test'
// const { token } = JSON.parse(localStorage.userInfo)

const config = {
   headers: {
    Authorization: `Bearer ${token}`,
   },
}

export async function userLists({ access_token, queries }) {
   try {
      store.dispatch({ type: USER_LOGIN_REQUEST })
      const params = queries ? `?${queries}` : '';
      const { data } = await axios.get(`/api/users${params}`, {
         headers: {
          Authorization: `Bearer ${access_token}`,
         },
      })
      store.dispatch({ type: USER_LIST_SUCCESS,  payload: data })
   }
   catch(error) {
      store.dispatch({
         type: USER_LIST_FAIL,
         payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message 
       })
   }
}

export async function getUserDetails(id) {
   try {
      store.dispatch({ type: USER_DETAILS_REQUEST })
      const { data } = await axios.get(`/api/users/${id}`, config)
      store.dispatch({
         type: USER_DETAILS_SUCCESS,
         payload: data
      })
   }
   catch(error) {
      store.dispatch({
         type: USER_DETAILS_FAIL,
         payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
}


export const login = (email, password) => async (dispatch) => {
 	try {
 		dispatch({
 			 type: USER_LOGIN_REQUEST
 		})

 		const config = {
 			 headers: {
 			 	'Content-Type' : 'application/json'
 			 }
 		}

 		const { data } = await axios.post(
 			'/api/users/login',
 			{email, password}, 
 			config
 		)

 		dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data

 		})

 		localStorage.setItem('userInfo', JSON.stringify(data))


 	} catch( error ) {
     dispatch({
     	 type: USER_LOGIN_FAIL,
     	 payload: error.response && error.response.data.message 
          	  ? error.response.data.message 
          	  : error.message 
     })
 	}
}

export const logout = () => (dispatch) => {
   localStorage.removeItem('userInfo')
   dispatch({ type: USER_LIST_RESET })
   dispatch({ type: USER_LOGOUT })
}

export const deleteUser = (id) => async (dispatch, getState) => {
   try {
     dispatch({
        type: USER_DELETE_REQUEST
     })
 
     const {
        userLogin: { userInfo }
     } = getState()
 
     const config = {
        headers: {
         Authorization: `Bearer ${userInfo.token}`,
        },
     }
 
    await axios.delete(`/api/users/${id}`, config)
 
     dispatch({type: USER_DELETE_SUCCESS})
 
   } catch( error ) {
      dispatch({
        type: USER_DELETE_FAIL,
        payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
 }

 export const updateUser = (user) => async (dispatch, getState) => {
   try {
     dispatch({
        type: USER_UPDATE_REQUEST
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
 
     dispatch({type: USER_UPDATE_SUCCESS})

     dispatch({
       type: USER_DETAILS_SUCCESS,
       payload: data
     })
 
   } catch( error ) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message 
      })
   }
 }