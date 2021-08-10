import { NOTE_CREATE_FAIL, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCCESS, NOTE_DELETE_FAIL, NOTE_DELETE_REQUEST, NOTE_DELETE_SUCCESS, SUPPORT_NOTES_FAIL, SUPPORT_NOTES_REQUEST, SUPPORT_NOTES_SUCCESS } from "../constants/noteConstants"

export const noteCreateReducer = (state = {}, action) => {
   switch(action.type) {
      case NOTE_CREATE_REQUEST:
         return { loading: true }
      case NOTE_CREATE_SUCCESS:   
         return  { loading: false, success: true }
      case NOTE_CREATE_FAIL:
         return { loading: false, error: action.payload }  
      default:
         return state   
   }
}

export const supportNotesReducer = (state = { notes: [] }, action) => {
   switch(action.type) {
      case SUPPORT_NOTES_REQUEST:
         return { loading: true, notes: [] }
      case SUPPORT_NOTES_SUCCESS:   
         return  { loading: false, notes: action.payload }
      case SUPPORT_NOTES_FAIL:
         return { loading: false, error: action.payload }   
      default:
         return state   
   }
}

export const noteDeleteReducer = (state = {}, action) => {
   switch(action.type) {
          case NOTE_DELETE_REQUEST:
             return { loading: true }
          case NOTE_DELETE_SUCCESS:
             return  { loading: false, success: true }
          case NOTE_DELETE_FAIL:
             return { loading: false, error: action.payload }  
          default:
             return state   
   }
}