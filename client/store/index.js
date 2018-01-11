import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import products from './products'
import reviews from './reviews'
import product from './product'
import address from './address'
import adminUser from './adminUser'
import users from './users'






const reducer = combineReducers({user, users, products, reviews, adminUser, address})



const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './adminUser'
export * from './users'
export * from './products'
export * from './reviews'
export * from './address'

