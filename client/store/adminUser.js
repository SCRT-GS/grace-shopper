import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

const GET_ADMIN_USER = 'GET_ADMIN_USER'



/**
 * INITIAL STATE
 */
// const defaultUSERS = {}

/**
 * ACTION CREATORS
 */

const getAdminUserActionCreator = user => ({type: GET_ADMIN_USER, user})


/**
 * THUNK CREATORS
 */


  export const getAdminUser = (id) =>
  dispatch =>
    axios.get(`/api/users/admin/${id}`)
      .then(res => res.data)
      .then(result => {
        console.log('got to dispatc')
        dispatch(getAdminUserActionCreator(result))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (adUser = {}, action) {
  switch (action.type) {
      case GET_ADMIN_USER:
      return action.user
    default:
      return adUser
  }
}
