import axios from 'axios'
import history from '../history'

/************ ACTION TYPES ************/

const GET_MY_ORDERS = 'GET_MY_ORDERS'


/************ ACTION CREATORS ************/


const getMyOrdersActionCreator = myOrders => ({ type: GET_MY_ORDERS, myOrders })


/************ THUNK CREATORS ************/

export const getMyOrders = (id) =>
  dispatch =>
    axios.get(`/api/users/${id}/orders`)
      .then(res => res.data)
      .then(result => {
        dispatch(getMyOrdersActionCreator(result))
      })
      .catch(err => console.log(err))


/************ REDUCER ************/

export default function (myOrders = [], action) {
  switch (action.type) {
    case GET_MY_ORDERS:
    console.log(action.myOrders)
      return action.myOrders
    default:
      return myOrders
  }
}
