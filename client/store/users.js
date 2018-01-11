import axios from 'axios'
import history from '../history'


const GET_USERS = 'GET_USERS'
const UPDATE_USER = 'UPDATE_USER'
const DELETE_USER = 'DELETE_USER'

const getUsersActionCreator = users => ({ type: GET_USERS, users })
const deleteUserActionCreator = id => ({ type: DELETE_USER, id })
const updateUserActionCreator = user => ({ type: UPDATE_USER, user })

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
  export const updateUser = (id, user) => dispatch => {
    axios.put(`/api/users/update/${id}`, user)
      .then(res => dispatch(updateUserActionCreator(res.data)))
      .catch(err => console.error(`Could not update user:`, err));
  }


export default function (users = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    case UPDATE_USER:
      return users.map(user => (action.user.id === user.id ? action.user : user))

    case DELETE_USER:
      return users.filter(user => user.id !== action.id)

    default:
      return users
  }
}
