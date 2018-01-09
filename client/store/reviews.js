import axios from 'axios'
import history from '../history'

/************ ACTION TYPES ************/

const GET_REVIEWS = 'GET_REVIEWS'


/************ INITIAL STATE ************/


/************ ACTION CREATORS ************/

const getReviewsActionCreator = reviews => ({type: GET_REVIEWS, reviews})


/************ THUNK CREATORS ************/

export const getReviews = () =>
  dispatch =>
    axios.get('/api/reviews/')
    .then(res => res.data)
      .then(result => {
        dispatch(getReviewsActionCreator(result))
      })
      .catch(err => console.log(err))

/************ REDUCER ************/

export default function (reviews = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews
    default:
      return reviews
  }
}
