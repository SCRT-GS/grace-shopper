import axios from 'axios'
import history from '../history'


const GET_ADMIN_USER = 'GET_ADMIN_USER'


const getAdminUserActionCreator = user => ({ type: GET_ADMIN_USER, user })


export const getAdminUser = (id) =>
  dispatch =>
    axios.get(`/api/users/admin/${id}`)
      .then(res => res.data)
      .then(result => {
        console.log('got to dispatc')
        dispatch(getAdminUserActionCreator(result))
      })
      .catch(err => console.log(err))


export default function (adminUser = {}, action) {
  switch (action.type) {
    case GET_ADMIN_USER:
      return action.user
    default:
      return adminUser
  }
}
