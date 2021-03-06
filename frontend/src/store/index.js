import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' 
import { productCreateReducer, productListReducer, productDetailsReducer, productUpdateReducer, productDeleteReducer } from './reducers/productReducers'
import { userLoginReducer, userListReducer, userDetailsReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { supportCreateReducer, supportDeleteReducer, supportDetailsReducer, supportListReducer, suppportUpdateReducer } from './reducers/supportReducers'
import { paymentPlanListReducer, paymentPlanDetailsReducer, paymentPlanDeleteReducer, paymentPlanUpdateReducer, paymentPlanCreateReducer, paymentPlanProductUpdateReducer} from './reducers/paymentPlanReducers'
import { tempProductHolderReducer } from './reducers/tempProductHolderReducer'
import { noteCreateReducer, noteDeleteReducer, supportNotesReducer } from './reducers/noteReducers'
import { knowledgeBaseCreateReducer, knowledgeBaseDeleteReducer, knowledgeBaseDetailsReducer, knowledgeBaseListReducer, knowledgeBaseUpdateReducer } from './reducers/knowledgeBaseReducers'


// const reducer = combineReducers({
// 	productList: productListReducer,
// 	productDetails: productDetailsReducer,
// 	productCreate: productCreateReducer,
// 	productUpdate: productUpdateReducer,
// 	productDelete: productDeleteReducer,
// 	tempProducts: tempProductHolderReducer,
// 	userLogin: userLoginReducer,
// 	userList: userListReducer,
// 	userDelete: userDeleteReducer,
// 	userDetails: userDetailsReducer,
// 	userUpdate: userUpdateReducer,
// 	supportCreate: supportCreateReducer,
// 	supportList: supportListReducer,
// 	supportDetails: supportDetailsReducer,
// 	suppportUpdate: suppportUpdateReducer,
// 	supportDelete: supportDeleteReducer,
// 	noteCreate: noteCreateReducer,
// 	supportNotes: supportNotesReducer,
// 	noteDelete: noteDeleteReducer,
// 	paymentPlanList: paymentPlanListReducer,
// 	paymentPlanDetails: paymentPlanDetailsReducer,
// 	paymentPlanDelete :paymentPlanDeleteReducer,
// 	paymentPlanUpdate :paymentPlanUpdateReducer,
// 	paymentPlanCreate: paymentPlanCreateReducer,
// 	paymentPlanProductUpdate: paymentPlanProductUpdateReducer,
// 	knowledgeBaseList: knowledgeBaseListReducer,
// 	knowledgeBaseCreate: knowledgeBaseCreateReducer,
// 	knowledgeBaseUpdate: knowledgeBaseUpdateReducer,
// 	knowledgeBaseDetails: knowledgeBaseDetailsReducer,
// 	knowledgeBaseDelete: knowledgeBaseDeleteReducer
	
// import { supportListReducer } from './reducers/supportReducers'
import { authReducer as auth, authMessage } from './reducers/authReducer';


const reducer = combineReducers({
	 productList: productListReducer,
	 productDetails: productDetailsReducer,
	 userLogin: userLoginReducer,
	 user: userListReducer,
	 userDelete: userDeleteReducer,
	 userDetails: userDetailsReducer,
	 userUpdate: userUpdateReducer,
	 supportList: supportListReducer,
   auth,
	 authMessage,
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