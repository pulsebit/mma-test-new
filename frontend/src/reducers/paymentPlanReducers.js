import { 
    PAYMENTPLAN_LIST_REQUEST, 
    PAYMENTPLAN_LIST_SUCCESS, 
    PAYMENTPLAN_LIST_FAIL,
    PAYMENTPLAN_DELETE_REQUEST,
    PAYMENTPLAN_DELETE_SUCCESS,
    PAYMENTPLAN_DELETE_FAIL,
    PAYMENTPLAN_UPDATE_REQUEST,
    PAYMENTPLAN_UPDATE_SUCCESS,
    PAYMENTPLAN_UPDATE_FAIL,
    PAYMENTPLAN_CREATE_REQUEST,
    PAYMENTPLAN_CREATE_SUCCESS,
    PAYMENTPLAN_CREATE_FAIL,
    PAYMENTPLAN_DETAILS_SUCCESS,
    PAYMENTPLAN_DETAILS_REQUEST,
    PAYMENTPLAN_DETAILS_FAIL
} from '../constants/paymentPlanConstant'

export const paymentPlanListReducer = (state = { paymentPlans: [] }, action) => {
    switch (action.type) {
        case PAYMENTPLAN_LIST_REQUEST:
            return {loading: true, paymentPlans: []}
        case PAYMENTPLAN_LIST_SUCCESS:
            return {loading: false, paymentPlans: action.payload}
        case PAYMENTPLAN_LIST_FAIL:
        return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const paymentPlanDeleteReducer = (state = { }, action) => {
   switch(action.type) {
          case PAYMENTPLAN_DELETE_REQUEST:
             return { loading: true }
          case PAYMENTPLAN_DELETE_SUCCESS:
             return  { loading: false, success: true }
          case PAYMENTPLAN_DELETE_FAIL:
             return { loading: false, error: action.payload }  
          default:
             return state   
   }
}

export const paymentPlanDetailsReducer = (state = { paymentPlan: {} }, action) => {
    switch(action.type) {
           case PAYMENTPLAN_DETAILS_REQUEST:
              return { loading: true, paymentPlan: {} }
           case PAYMENTPLAN_DETAILS_SUCCESS:   
              return  { loading: false, paymentPlan: action.payload }
           case PAYMENTPLAN_DETAILS_FAIL:
              return { loading: false, error: action.payload }   
           default:
              return state   
    }
}

export const paymentPlanUpdateReducer = (state = { paymentPlan: {} }, action) => {
    switch(action.type) {
           case PAYMENTPLAN_UPDATE_REQUEST:
              return { loading: true }
           case PAYMENTPLAN_UPDATE_SUCCESS:   
              return  { loading: false, success: true }
           case PAYMENTPLAN_UPDATE_FAIL:
              return { loading: false, error: action.payload }  
           default:
              return state   
    }
 }
 export const paymentPlanCreateReducer = (state = {}, action) => {
   switch(action.type) {
          case PAYMENTPLAN_CREATE_REQUEST:
             return { loading: true }
          case PAYMENTPLAN_CREATE_SUCCESS:   
             return  { loading: false, success: true }
          case PAYMENTPLAN_CREATE_FAIL:
             return { loading: false, error: action.payload }  
          default:
             return state   
   }
}