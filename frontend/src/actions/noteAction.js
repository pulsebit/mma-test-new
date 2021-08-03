import axios from 'axios'
import { NOTE_CREATE_FAIL, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCCESS, NOTE_DELETE_FAIL, NOTE_DELETE_REQUEST, NOTE_DELETE_SUCCESS, SUPPORT_NOTES_FAIL, SUPPORT_NOTES_REQUEST, SUPPORT_NOTES_SUCCESS } from '../constants/noteConstants'

export const createNote = ( supportInfo, clientInfo, assigneeInfo, note ) => async (dispatch, getState) => {
    
    const {
        userLogin: { userInfo }
     } = getState()

     const creatorInfo = userInfo._id

	try {
		dispatch({
			type: NOTE_CREATE_REQUEST
		})
		await axios.post(`/api/notes/`, {supportInfo, clientInfo, creatorInfo, assigneeInfo, note} )
	
		dispatch({type: NOTE_CREATE_SUCCESS})
	
	} catch( error ) {
		dispatch({
			type: NOTE_CREATE_FAIL,
			payload: error.response && error.response.data.message 
				? error.response.data.message 
				: error.message 
		})
	}
}

export const getSupportNotes = (id) => async (dispatch) => {
	try {
		dispatch({ type: SUPPORT_NOTES_REQUEST })

		const { data } = await axios.get(`/api/notes/${id}`)

		dispatch({
			type: SUPPORT_NOTES_SUCCESS,
			payload: data
		})

	} catch (error) {
		dispatch({
			type: SUPPORT_NOTES_FAIL,
			payload: error.response && error.response.data.message 
			? error.response.data.message 
			: error.message
		})
	}
}

export const deleteNote = (note) => async (dispatch, getState) => {
	try {
		dispatch({
			type: NOTE_DELETE_REQUEST
		})

		await axios.delete(`/api/notes/${note._id}`)

		dispatch({type: NOTE_DELETE_SUCCESS})

	} catch( error ) {
		dispatch({
			type: NOTE_DELETE_FAIL,
			payload: error.response && error.response.data.message 
				? error.response.data.message 
				: error.message 
		})
	}
}