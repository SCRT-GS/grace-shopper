import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router'
import { getReviews } from '../store'

/**
 * COMPONENT
 */
export const ReviewList = (props) => {
  componentDidMount() {
    const reviewsThunk = getReviews()
    store.dispatch(reviewsThunk);

  }

  const reviews  = props.reviews
  console.log(props.reviews)

  return (
    <div>
      <h3>REVIEWS </h3>
      {reviews.map((review) => {
        return (
          <ul key={review.id} >
            <li>
            {/*}
            <NavLink to={`/reviews/${review.id}`} style={{ textDecoration: 'none' }}>*/}
            <h2 id="review-rating">{review.rating}</h2>
            <h3 id="review-content">{review.content}</h3>
          {/*}</NavLink> */}
            </li>
          </ul>
        )
      }
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    reviews: state.reviews
  }
}
// const mapDispatch = (state) => {

// }

export default connect(mapState)(ReviewList)
