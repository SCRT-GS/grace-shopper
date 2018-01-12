import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import users from './users'
import product from './product'
import products from './products'
import reviews from './reviews'
import cart from './cart'
import address from './address'
import productReviews from './productReviews'
import adminUser from './adminUser'
import userOrders from './userOrders'


const reducer = combineReducers({user, users, userOrders, product, products, reviews, productReviews, adminUser, address})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './adminUser'
export * from './users'
export * from './product'
export * from './products'
export * from './reviews'
export * from './productReviews'
export * from './address'
export * from './userOrders'
