import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' 
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { userLoginReducer, userListReducer, userDetailsReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { supportListReducer } from './reducers/supportReducers'
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