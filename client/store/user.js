import axios from 'axios'
import history from '../history'
import {getCart} from './cart'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const updateUserPasswordActionCreator = user => ({type: UPDATE_USER_PASSWORD, user})

/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res => {
        dispatch(getUser(res.data || defaultUser))
        dispatch(getCart(res.data.id || 0))
      })
      .catch(err => console.log(err))

export const auth = (email, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data))
        if(res.data.resetPassword){
          history.push('/reset-password')
        } else {
        history.push('/home')
        }
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({error: authError}))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))

   export const updateUserPassword = (id, user) => dispatch => {
        axios.put(`/api/users/resetPassword/${id}`, user)
          .then(res => {dispatch(updateUserPasswordActionCreator(res.data))
          history.push('/login')})
          .catch(err => console.error(`Could not update user:`, err));
      }
/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATE_USER_PASSWORD:
      return action.user
    default:
      return state
  }
}
