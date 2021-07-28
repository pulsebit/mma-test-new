import { PRODUCT_TEMP_FAIL, PRODUCT_TEMP_REQUEST, PRODUCT_TEMP_SUCCESS } from "../constants/tempProductConstant"

export const tempProductHolderReducer = (state = { tempProductHolder: [] }, action) => {
    switch(action.type) {
        case PRODUCT_TEMP_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_TEMP_SUCCESS:   
            return  { loading: false, tempProductHolder: action.payload }
        case PRODUCT_TEMP_FAIL:
            return { loading: false, error: action.payload }   
        default:
            return state   
    }
 }