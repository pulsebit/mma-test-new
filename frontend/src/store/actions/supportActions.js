import axios from 'axios'
import { 
	SUPPORT_LIST_REQUEST, 
	SUPPORT_LIST_SUCCESS, 
	SUPPORT_LIST_FAIL,
	SUPPORT_DETAILS_REQUEST, 
	SUPPORT_DETAILS_SUCCESS, 
	SUPPORT_DETAILS_FAIL } from '../constants/supportConstants'

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