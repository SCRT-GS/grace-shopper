import axios from 'axios'
import history from '../history'



/************ ACTION TYPES ************/

const ADD_ADDRESS = 'ADD_ADDRESS'

/************ ACTION CREATORS ************/

const addAddressActionCreator = address => ({
  type: ADD_ADDRESS,
  address
})

/************ THUNK CREATORS ************/

export const addNewAddress = (line1, line2, city, state, zip, orderId) => dispatch => {
  axios.post(`/api/addresses`, {
    line1,
    line2,
    city,
    state,
    zip,
    orderId
  })
  .then(address => dispatch(addAddressActionCreator(address)))
  .catch(err => console.error('Your address was NOT successfully added to your order', err))
}


/************ REDUCER ************/

export default function (address = [], action) {
  switch (action.type) {
    case ADD_ADDRESS:
      return action.address
    default:
      return address
  }
}













/************ ACTION TYPES ************/
/************ ACTION CREATORS ************/
/************ THUNK CREATORS ************/
/************ REDUCER ************/
