import { PAYMENTPLAN_LIST_REQUEST, PAYMENTPLAN_LIST_SUCCESS, PAYMENTPLAN_LIST_FAIL } from '../constants/paymentPlanConstant'

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

export const paymentPlanDetailsReducer = (state = { paymentPlanDetails: [] }, action) => {
    switch(action.type) {
           case PAYMENTPLAN_LIST_REQUEST:
              return { loading: true, paymentPlanDetails: {} }
           case PAYMENTPLAN_LIST_SUCCESS:   
              return  { loading: false, paymentPlanDetails: action.payload }
           case PAYMENTPLAN_LIST_FAIL:
              return { loading: false, error: action.payload }   
           default:
              return state   
    }
}