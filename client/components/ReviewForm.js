import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addNewReview } from '../store/reviews'





class ReviewForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rating: '',
        content: '',
        redirect: false
      }
      this.inputReviewStar = this.inputReviewStar.bind(this)
      this.inputContent = this.inputContent.bind(this)
      this.handleReviewSubmit = this.handleReviewSubmit.bind(this)
    }


    inputReviewStar(e){
      this.setState({
        rating: e.target.value
      })
    }

    inputContent(e){
      this.setState({
        content: e.target.value
      })
    }

    handleReviewSubmit(e) {
      e.preventDefault()
      this.props.submitReview(this.state.rating, this.state.content)
      this.setState({
        redirect: true
      })
    }



  render() {

    return (
      <div id="review-page-container">
        <div id="label-review">
          <label >Submit a review for {'INPUT PRODUCT NAME'}</label>
        </div>
        <div id="form-container">
        <form onSubmit={this.handleReviewSubmit} className="new-project-form" id="project-form">
          <div>
            <select value={this.state.rating} onChange={this.inputReviewStar} name="reviewStar" className="select-star">
              <option defaultValue="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <input
              value={this.state.content}
              onChange={this.inputContent}
              type="text"
              placeholder="Write your review here..."
              className="form-one-col"
            />
          </div>
        </form>
          <div className="div-submit">
            <button className="review-submit" form="review-form" type='submit'>Submit Review</button>
          </div>
        </div>
      </div>
    )
  }
}


const mapState = state => {
  return {
    product: state.product,
    auth: state.auth
  };
};

const mapDispatch = (dispatch) => {
  return {
    submitReview: (rating, content) => {
      dispatch(addNewReview(rating, content))
    }

  }
}


const ReviewFormContainer = connect(mapState, mapDispatch)(ReviewForm)

export default ReviewFormContainer
