import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productCreateReducer, productUpdateReducer, productDeleteReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userUpdateReducer, userDeleteReducer } from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderDeliverReducer, orderListMyReducer, orderListReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productCreate: productCreateReducer,
    productDelete: productDeleteReducer,
    productUpdate: productUpdateReducer,
    
    //cart
    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
                                ? JSON.parse(localStorage.getItem('cartItems'))
                                : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null 
  
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : { }  

const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store

// export type RootState = ReturnType<typeof reducer>