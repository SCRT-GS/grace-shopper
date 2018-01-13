import axios from 'axios'
import history from '../history'

/************ ACTION TYPES ************/

const GET_SINGLE_REVIEW = 'GET_SINGLE_REVIEW'


/************ ACTION CREATORS ************/

const getSingleReviewActionCreator = review => ({type: GET_SINGLE_REVIEW, review})


/************ THUNK CREATORS ************/

export const getSingleReview = (id) =>
dispatch =>
  axios.get(`/api/reviews/${id}`)
  .then(res => res.data)
  .then(result => {
    dispatch(getSingleReviewActionCreator(result))
  })
  .catch(err => console.error(err))


/************ REDUCER ************/

export default function (review = [], action) {
  switch (action.type) {
    case GET_SINGLE_REVIEW:
      return action.review
    default:
      return review
  }
}
