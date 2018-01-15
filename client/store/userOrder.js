import axios from 'axios'
import history from '../history'

/************ ACTION TYPES ************/

const GET_MY_ORDER = 'GET_MY_ORDER'


/************ ACTION CREATORS ************/

const getMyOrderActionCreator = myOrder => ({ type: GET_MY_ORDER, myOrder })


/************ THUNK CREATORS ************/


export const getMyOrder = (id, orderId) =>
  dispatch =>
    axios.get(`/api/users/${id}/orders/${orderId}`)
      .then(res => res.data)
      .then(result => {
        dispatch(getMyOrderActionCreator(result))
      })
      .catch(err => console.log(err))


/************ REDUCER ************/

export default function (myOrder = {}, action) {
  switch (action.type) {
    case GET_MY_ORDER:
      return action.myOrder
    default:
      return myOrder
  }
}
