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


export const addNewReview = (rating, content) => dispatch => {
  axios.post(`/api/reviews`, {
    rating,
    content
  })
  .then(review => dispatch(newReview(review)))
  .catch(err => console.log('New review was not successfully created', err))
}

/************ REDUCER ************/

export default function (reviews = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews
    default:
      return reviews
  }
}
