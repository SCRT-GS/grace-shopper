import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store, { getSingleReview, getProduct } from '../store'

export class reviewDetail extends Component {


    componentDidMount() {
        const reviewId = Number(this.props.match.params.reviewId)
        const review = getSingleReview(reviewId)
        store.dispatch(review)
      }

    render() {
        const productName = this.props.product.name
        const productDescription = this.props.product.description
        const productReviewRating = this.props.singleReview.rating
        const productReviewContent = this.props.singleReview.content
        const productId = this.props.product.id

        return (
            <div>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                    <h3>Rating:</h3>
                    <h3>
                    {[...Array(productReviewRating)].map(e => '*').join('')}
                    </h3>
                    <p>{productReviewContent}</p>
                <Link to={`/products/${productId}`}>
                 <button>Go Back</button>
                </Link>
            </div>
        )
    }
}


const mapState = (state) => {
    return {
      product: state.product,
      singleReview: state.singleReview
    }
  }

  const mapDispatch = {getSingleReview, getProduct }

  export default connect(mapState, mapDispatch)(reviewDetail)
