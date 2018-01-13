import axios from 'axios'
import history from '../history'


const GET_ORDERS = 'GET_ORDERS'
const UPDATE_ORDER = 'UPDATE_ORDER'

const updateOrderActionCreator = order => ({ type: UPDATE_ORDER, order })
const getOrdersActionCreator = orders => ({ type: GET_ORDERS, orders })


export const getOrders = () =>
  dispatch =>
    axios.get('/api/users/orders/')
      .then(res => res.data)
      .then(result => {
        dispatch(getOrdersActionCreator(result))
      })
      .catch(err => console.log(err))

  export const updateOrder = (id, order) =>
      dispatch =>
        axios.put(`/api/users/update/orders/${id}`, order)
          .then(res => res.data)
          .then(result => {
            dispatch(updateOrderActionCreator(result))
          })
          .then(console.log('reached backend'))
          .catch(err => console.log(err))

export default function (orders = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    case UPDATE_ORDER:
      return orders.map(order => (action.order.id === order.id ? action.order : order))
    default:
      return orders
  }
}
