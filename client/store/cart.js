import axios from 'axios'
import history from '../history'

//ACTION TYPES
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

//ACTION CREATORS
const getCartActionCreator = cart => ({type: GET_CART, cart})
const addToCartActionCreator = cart => ({ADD_TO_CART, cart})

//THUNK CREATORS
export const getCart = id =>
  dispatch =>
    axios.get(`/api/cart/user/${id}`)
    .then(res => res.data)
      .then(result => {
        dispatch(getCartActionCreator(result))
      })
      .catch(err => console.log(err))

  export const addToCart = (productId, quantity, price) => dispatch => {
      axios.post('/api/cart/', {productId, quantity, price})
      .then(res => res.data)
      .then(result => {
        dispatch(addToCartActionCreator(result))
      })
      .catch(err => console.log(err))
  }

//REDUCER
export default function (cart = {}, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return action.cart
    default:
      return cart
  }
}
