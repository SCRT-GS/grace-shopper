import axios from 'axios'
import history from '../history'


const GET_ORDERS = 'GET_ORDERS'

const getOrdersActionCreator = orders => ({ type: GET_ORDERS, orders })


export const getOrders = () =>
  dispatch =>
    axios.get('/api/users/orders/')
      .then(res => res.data)
      .then(result => {
        dispatch(getOrdersActionCreator(result))
      })
      .catch(err => console.log(err))

export default function (orders = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    default:
      return orders
  }
}
