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
    PAYMENTPLAN_DETAILS_FAIL,
    PAYMENTPLAN_PRODUCT_UPDATE_REQUEST,
    PAYMENTPLAN_PRODUCT_UPDATE_SUCCESS,
    PAYMENTPLAN_PRODUCT_UPDATE_FAIL,
    PAYMENTPLAN_UPDATE_RESET,
    PAYMENTPLAN_LIST_BY_CREATOR_REQUEST,
    PAYMENTPLAN_LIST_BY_CREATOR_SUCCESS,
    PAYMENTPLAN_LIST_BY_CREATOR_FAIL,
    PAYMENTPLAN_PRODUCTS_REQUEST,
    PAYMENTPLAN_PRODUCTS_SUCCESS,
    PAYMENTPLAN_PRODUCTS_FAIL,
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
export const paymentPlanProductsReducer = (state = { paymentPlanProducts: {} }, action) => {
   switch(action.type) {
      case PAYMENTPLAN_PRODUCTS_REQUEST:
         return { loading: true, paymentPlanProducts: {} }
      case PAYMENTPLAN_PRODUCTS_SUCCESS:   
         return  { loading: false, paymentPlanProducts: action.payload }
      case PAYMENTPLAN_PRODUCTS_FAIL:
         return { loading: false, error: action.payload }   
      default:
         return state   
   }
}
export const paymentPlanListByCreatorReducer = (state = { paymentPlan: [] }, action) => {
   switch(action.type) {
          case PAYMENTPLAN_LIST_BY_CREATOR_REQUEST:
             return { loading: true, paymentPlan: [] }
          case PAYMENTPLAN_LIST_BY_CREATOR_SUCCESS:   
             return  { loading: false, paymentPlan: action.payload }
          case PAYMENTPLAN_LIST_BY_CREATOR_FAIL:
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
      case PAYMENTPLAN_UPDATE_RESET:
         return { loading: false, paymentPlan: {} }  
      default:
         return state   
   }
 }

export const paymentPlanProductUpdateReducer = (state = { paymentPlan: {} }, action) => {
   switch(action.type) {
      case PAYMENTPLAN_PRODUCT_UPDATE_REQUEST:
         return { loading: true }
      case PAYMENTPLAN_PRODUCT_UPDATE_SUCCESS:   
         return  { loading: false, success: true }
      case PAYMENTPLAN_PRODUCT_UPDATE_FAIL:
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
export const paymentPlanAddProductReducer = (state = {}, action) => {
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

