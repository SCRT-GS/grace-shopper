import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'


/**
 * INITIAL STATE
 */
// const defaultPRODUCTS = {}

/**
 * ACTION CREATORS
 */
const getProductsActionCreator = products => ({type: GET_PRODUCTS, products})


/**
 * THUNK CREATORS
 */

export const getProducts = () =>
  dispatch =>
    axios.get('/api/products/')
      .then(result => {
        dispatch(getProductsActionCreator(result))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (products = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return products
  }
}
