import axios from 'axios'
import history from '../history'

/************ ACTION TYPES ************/

const GET_REVIEWS = 'GET_REVIEWS'
const NEW_REVIEW = 'NEW_REVIEW'


/************ INITIAL STATE ************/


/************ ACTION CREATORS ************/

const getReviewsActionCreator = reviews => ({type: GET_REVIEWS, reviews})

const newReview = review => ({type: NEW_REVIEW, review})

/************ THUNK CREATORS ************/

export const getReviews = () =>
dispatch =>
  axios.get(`/api/reviews`)
  .then(res => res.data)
    .then(result => {
      dispatch(getReviewsActionCreator(result))
    })
    .catch(err => console.log(err))

export const addNewReview = (rating, content, productId) => dispatch => { //NEED TO ADD USERID TO ADD REVIEW//
  axios.post(`/api/reviews`, {
    rating,
    content,
    productId
  })
  .then(review => dispatch(newReview(review)))
  .catch(err => console.log('New review was not successfully created', err))
}

/************ REDUCER ************/

export default function (reviews = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return [ ...reviews, action.reviews]
    case NEW_REVIEW:
      return [...reviews, action.reviews]
    default:
      return reviews
  }
}
