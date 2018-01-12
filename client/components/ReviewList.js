import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

/**
 * COMPONENT
 */

export class ReviewList extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    const reviews = this.props.currentProduct.productReviews

    return (
      <div>
        <h3>REVIEWS</h3>
        {reviews.map((review) => {
          return (
            <ul key={review.id} >
              <li>
                <NavLink to={`/reviews/${review.id}`} >
                  <h2 id="review-rating">{review.rating}</h2>
                  <h3 id="review-content">{review.content}</h3>
                </NavLink>
              </li>
            </ul>
          )
        }
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    reviews: state.reviews,
    product: state.product

  }
}

export default connect(mapState)(ReviewList)


