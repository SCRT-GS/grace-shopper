import axios from 'axios'
import history from '../history'


/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT'


/**
 * INITIAL STATE
 */


/**
 * ACTION CREATORS
 */
const getProductActionCreator = product => ({ type: GET_PRODUCT, product })


/**
 * THUNK CREATORS
 */

export const getProduct = (id) =>
  dispatch =>
    axios.get(`/api/products/${id}`)
      .then(res => res.data)
      .then(result => {
        dispatch(getProductActionCreator(result))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (product = {}, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    default:
      return product
  }
}
