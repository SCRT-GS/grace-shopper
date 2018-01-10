import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USERS = 'GET_USERS'
const DELETE_USER = 'DELETE_USER'
const UPDATE_STUDENT = 'UPDATE_STUDENT';


/**
 * INITIAL STATE
 */
// const defaultUSERS = {}

/**
 * ACTION CREATORS
 */
const getUsersActionCreator = users => ({ type: GET_USERS, users })
const deleteUserActionCreator = id => ({ type: DELETE_USER, id })


/**
 * THUNK CREATORS
 */

export const getUsers = () =>
  dispatch =>
    axios.get('/api/users/')
      .then(res => res.data)
      .then(result => {
        dispatch(getUsersActionCreator(result))
      })
      .catch(err => console.log(err))

export const deleteUser = (id) =>
  dispatch => {
    axios.delete(`/api/users/${id}`)
    .then(res => console.log('res data:', res.data))
    .catch(err => console.error(`Removing user: ${id} unsuccessful`, err));
    dispatch(deleteUserActionCreator(id));
  }

/**
 * REDUCER
 */
export default function (users = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    case DELETE_USER:
      return users.filter(user => user.id !== action.id)
    default:
      return users
  }
}
