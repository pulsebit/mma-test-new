import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' 
import { productCreateReducer, productListReducer, productDetailsReducer, productUpdateReducer, productDeleteReducer } from './reducers/productReducers'
import { userLoginReducer, userListReducer, userDetailsReducer, userDeleteReducer, userUpdateReducer, userCreateReducer } from './reducers/userReducers'
import { supportCreateReducer, supportDeleteReducer, supportDetailsReducer, supportListByCreatorReducer, supportListReducer, suppportUpdateReducer } from './reducers/supportReducers'
import { paymentPlanListReducer, paymentPlanDetailsReducer, paymentPlanDeleteReducer, paymentPlanUpdateReducer, paymentPlanCreateReducer, paymentPlanProductUpdateReducer, paymentPlanListByCreatorReducer} from './reducers/paymentPlanReducers'
import { tempProductHolderReducer } from './reducers/tempProductHolderReducer'
import { noteCreateReducer, noteDeleteReducer, supportNotesReducer } from './reducers/noteReducers'
import { knowledgeBaseCreateReducer, knowledgeBaseDeleteReducer, knowledgeBaseDetailsReducer, knowledgeBaseListReducer, knowledgeBaseUpdateReducer } from './reducers/knowledgeBaseReducers'


const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	productDelete: productDeleteReducer,
	tempProducts: tempProductHolderReducer,
	userCreate: userCreateReducer,
	userLogin: userLoginReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateReducer,
	supportCreate: supportCreateReducer,
	supportList: supportListReducer,
	supportListByCreator: supportListByCreatorReducer,
	supportDetails: supportDetailsReducer,
	supportUpdate: suppportUpdateReducer,
	supportDelete: supportDeleteReducer,
	noteCreate: noteCreateReducer,
	supportNotes: supportNotesReducer,
	noteDelete: noteDeleteReducer,
	paymentPlanList: paymentPlanListReducer,
	paymentPlanDetails: paymentPlanDetailsReducer,
	paymentPlanListByCreator: paymentPlanListByCreatorReducer,
	paymentPlanDelete :paymentPlanDeleteReducer,
	paymentPlanUpdate :paymentPlanUpdateReducer,
	paymentPlanCreate: paymentPlanCreateReducer,
	paymentPlanProductUpdate: paymentPlanProductUpdateReducer,
	knowledgeBaseList: knowledgeBaseListReducer,
	knowledgeBaseCreate: knowledgeBaseCreateReducer,
	knowledgeBaseUpdate: knowledgeBaseUpdateReducer,
	knowledgeBaseDetails: knowledgeBaseDetailsReducer,
	knowledgeBaseDelete: knowledgeBaseDeleteReducer
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