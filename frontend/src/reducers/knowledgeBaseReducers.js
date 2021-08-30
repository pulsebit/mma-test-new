import { KNOWLEDGE_BASE_CREATE_FAIL, KNOWLEDGE_BASE_CREATE_REQUEST, KNOWLEDGE_BASE_CREATE_RESET, KNOWLEDGE_BASE_CREATE_SUCCESS, KNOWLEDGE_BASE_DELETE_FAIL, KNOWLEDGE_BASE_DELETE_REQUEST, KNOWLEDGE_BASE_DELETE_RESET, KNOWLEDGE_BASE_DELETE_SUCCESS, KNOWLEDGE_BASE_DETAILS_FAIL, KNOWLEDGE_BASE_DETAILS_REQUEST, KNOWLEDGE_BASE_DETAILS_SUCCESS, KNOWLEDGE_BASE_LIST_FAIL, KNOWLEDGE_BASE_LIST_REQUEST, KNOWLEDGE_BASE_LIST_SUCCESS, KNOWLEDGE_BASE_UPDATE_FAIL, KNOWLEDGE_BASE_UPDATE_REQUEST, KNOWLEDGE_BASE_UPDATE_RESET, KNOWLEDGE_BASE_UPDATE_SUCCESS } from "../constants/knowledgeBaseConstant"

export const knowledgeBaseListReducer = (state = { knowledgeBaseList: [] }, action) => {
    switch (action.type) {
        case KNOWLEDGE_BASE_LIST_REQUEST:
            return {loading: true, knowledgeBaseList: []}
        case KNOWLEDGE_BASE_LIST_SUCCESS:
            return {loading: false, knowledgeBaseList: action.payload}
        case KNOWLEDGE_BASE_LIST_FAIL:
        return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const knowledgeBaseCreateReducer = (state = {}, action) => {
    switch(action.type) {
           case KNOWLEDGE_BASE_CREATE_REQUEST:
              return { loading: true }
           case KNOWLEDGE_BASE_CREATE_SUCCESS:   
              return  { loading: false, success: true }
           case KNOWLEDGE_BASE_CREATE_FAIL  :
              return { loading: false, error: action.payload } 
            case KNOWLEDGE_BASE_CREATE_RESET:
               return { loading: false, state: {} } 
           default:
              return state   
    }
 }

 export const knowledgeBaseDetailsReducer = (state = { knowledgeBase: {} }, action) => {
   switch(action.type) {
          case KNOWLEDGE_BASE_DETAILS_REQUEST:
             return { loading: true, knowledgeBase: {} }
          case KNOWLEDGE_BASE_DETAILS_SUCCESS:   
             return  { loading: false, knowledgeBase: action.payload }
          case KNOWLEDGE_BASE_DETAILS_FAIL:
             return { loading: false, error: action.payload }   
          default:
             return state   
   }
}

 export const knowledgeBaseUpdateReducer = (state = { knowledgeBase: {} }, action) => {
    switch(action.type) {
       case KNOWLEDGE_BASE_UPDATE_REQUEST:
          return { loading: true }
       case KNOWLEDGE_BASE_UPDATE_SUCCESS:   
          return  { loading: false, success: true }
       case KNOWLEDGE_BASE_UPDATE_FAIL:
          return { loading: false, error: action.payload }
       case KNOWLEDGE_BASE_UPDATE_RESET:
          return { loading: false, knowledgeBase: {} }  
       default:
          return state   
    }
  }

export const knowledgeBaseDeleteReducer = (state = { }, action) => {
   switch(action.type) {
      case KNOWLEDGE_BASE_DELETE_REQUEST:
         return { loading: true }
      case KNOWLEDGE_BASE_DELETE_SUCCESS:
         return  { loading: false, success: true }
      case KNOWLEDGE_BASE_DELETE_FAIL:
         return { loading: false, error: action.payload }
      case KNOWLEDGE_BASE_DELETE_RESET:
         return { loading: false, state: {} }  
      default:
         return state   
   }
}