import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' 
import { productCreateReducer, productListReducer, productDetailsReducer, productUpdateReducer, productDeleteReducer } from './reducers/productReducers'
import { userLoginReducer, userListReducer, userDetailsReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { supportCreateReducer, supportDeleteReducer, supportDetailsByStatusReducer, supportDetailsReducer, supportListReducer, suppportUpdateReducer } from './reducers/supportReducers'
import { paymentPlanListReducer, paymentPlanDetailsReducer, paymentPlanDeleteReducer, paymentPlanUpdateReducer, paymentPlanCreateReducer, paymentPlanProductUpdateReducer} from './reducers/paymentPlanReducers'
import { tempProductHolderReducer } from './reducers/tempProductHolderReducer'
import { noteCreateReducer, noteDeleteReducer, supportNotesReducer } from './reducers/noteReducers'


const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	productDelete: productDeleteReducer,
	tempProducts: tempProductHolderReducer,
	userLogin: userLoginReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateReducer,
	supportCreate: supportCreateReducer,
	supportList: supportListReducer,
	supportDetails: supportDetailsReducer,
	supportDetailsByStatus: supportDetailsByStatusReducer,
	suppportUpdate: suppportUpdateReducer,
	supportDelete: supportDeleteReducer,
	noteCreate: noteCreateReducer,
	supportNotes: supportNotesReducer,
	noteDelete: noteDeleteReducer,
	paymentPlanList: paymentPlanListReducer,
	paymentPlanDetails: paymentPlanDetailsReducer,
	paymentPlanDelete :paymentPlanDeleteReducer,
	paymentPlanUpdate :paymentPlanUpdateReducer,
	paymentPlanCreate: paymentPlanCreateReducer,
	paymentPlanProductUpdate: paymentPlanProductUpdateReducer
	
})

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const initialState = {
	userLogin:  {userInfo: userInfoFromStorage},
}

const middleware = [thunk]

const store = createStore(
	 reducer, 
	 initialState, 
	 composeWithDevTools(applyMiddleware(...middleware))
)

export default store