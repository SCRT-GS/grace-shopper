import axios from 'axios'
import history from '../history'

/************ ACTION TYPES ************/

const GET_PRODUCT_REVIEWS = 'GET_PRODUCT_REVIEWS'

/************ INITIAL STATE ************/


/************ ACTION CREATORS ************/


const getProductReviewsActionCreator = productReviews => ({type: GET_PRODUCT_REVIEWS, productReviews})

/************ THUNK CREATORS ************/


export const getProductReviews = (id) =>
  dispatch =>
    axios.get(`/api/products/${id}/reviews`)
    .then(res => res.data)
      .then(result => {
        dispatch(getProductReviewsActionCreator(result))
      })
      .catch(err => console.log(err))

/************ REDUCER ************/

export default function (productReviews = [], action) {
  switch (action.type) {
    case GET_PRODUCT_REVIEWS:
      return action.productReviews
    default:
      return productReviews
  }
}
