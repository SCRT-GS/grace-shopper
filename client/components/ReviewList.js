import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export const ReviewList = (props) => {

    const reviews = props.currentProduct.productReviews

    const stars = 5

    return (
      <div>
        <h3>REVIEWS</h3>
        {reviews.map((review) => {
          return (
            <ul key={review.id} >
              <li>
                <Link to={`/reviews/${review.id}`} >

                  <h2 id="review-rating">{[...Array((review.rating))].map((e, i) => {return (<i key={i} className="star icon"></i>)})}{[...Array((stars - review.rating))].map((e, i) => {return (<i key={i} className="empty star icon"></i>)})}</h2>

                  <h3 id="review-content">{review.content}</h3>
                </Link>
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
