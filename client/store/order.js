import axios from 'axios'
import history from '../history'

const GET_ORDER =  'GET_ORDER'

const getOrderActionCreator = order => ({ type: GET_ORDER, order })


/**
 * THUNK CREATORS
 */

export const getOrder = (id) =>
  dispatch =>
    axios.get(`/api/users/admin/orders/${id}`)
      .then(res => res.data)
      .then(result => {
        dispatch(getOrderActionCreator(result))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (order = {}, action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    default:
      return order
  }
}
