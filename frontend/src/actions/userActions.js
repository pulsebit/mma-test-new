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
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
} from '../constants/userConstants'


export const createUser = (isAdmin, name, email, password, mobile_no, gender ,birthdate, address, state, zipcode, country, dataStudioLink) => async (dispatch, getState) => {
	
   if ( isAdmin == true ){
      const {
         userLogin: { userInfo }
      } = getState()
   
      var creator = userInfo._id
   } 
  

   try {
		dispatch({
			type: USER_CREATE_REQUEST
		})
		await axios.post(`/api/users`, {name, email, password, mobile_no, creator, gender ,birthdate, address, state, zipcode, country, dataStudioLink} )
	
		dispatch({type: USER_CREATE_SUCCESS})
	
	} catch( error ) {
		dispatch({
			type: USER_CREATE_FAIL,
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


export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
       type: USER_LIST_REQUEST
    })

    const {
       userLogin: { userInfo }
    } = getState()

    const config = {
       headers: {
        Authorization: `Bearer ${userInfo.token}`,
       },
    }

    const { data } = await axios.get('/api/users', config)

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data
    })

  } catch( error ) {
     dispatch({
       type: USER_LIST_FAIL,
       payload: error.response && error.response.data.message 
              ? error.response.data.message 
              : error.message 
     })
  }
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




export const getUserDetails = (id) => async (dispatch, getState) => {
   try {
     dispatch({
        type: USER_DETAILS_REQUEST
     })
 
     const {
        userLogin: { userInfo }
     } = getState()
 
     const config = {
        headers: {
         Authorization: `Bearer ${userInfo.token}`,
        },
     }


     const { data } = await axios.get(`/api/users/${id}`, config)
 
     dispatch({
       type: USER_DETAILS_SUCCESS,
       payload: data
     })
 
   } catch( error ) {
      dispatch({
        type: USER_DETAILS_FAIL,
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