import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


export const ReviewList = (props) => {

    const reviews = props.currentProduct.productReviews

    return (
      <div>
        <h3>REVIEWS</h3>
        {reviews.map((review) => {
          return (
            <ul key={review.id} >
              <li>
                <NavLink to={`/reviews/${review.id}`} >
                  <h2 id="review-rating">{[...Array(review.rating)].map(e => '*').join('')}</h2>

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

const mapState = (state) => {
  return {
    reviews: state.reviews,
    product: state.product

  }
}

export default connect(mapState)(ReviewList)
