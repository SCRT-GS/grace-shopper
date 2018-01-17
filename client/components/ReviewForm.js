import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addNewReview } from '../store/reviews'


export class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      content: '',
      productId: ''
    }
    this.inputReviewStar = this.inputReviewStar.bind(this)
    this.inputContent = this.inputContent.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentWillMount() {
    this.setState({
      productId: this.props.product.id
    })
  }

  inputReviewStar(evt) {
    this.setState({
      rating: evt.target.value
    })
  }

  inputContent(evt) {
    this.setState({
      content: evt.target.value
    })
  }


  submit(evt) {
    evt.preventDefault()
    const productId = this.props.product.id
    this.props.submitReview(this.state.rating, this.state.content, this.state.productId) //NEED TO ADD USERID TO SUBMIT HANDLER
    this.props.history.push(`/products/${productId}`)
    window.location.reload()

  }


  render() {
    console.log(this.props.product)
    const productName = this.props.product.name

    return (
      <div id="review-page-container">
        <div id="label-review">
          <label >Write a review for {productName}</label>
        </div>
        <div id="form-container">
          <form onSubmit={this.submit} id="review-form">
            <div>
            <label>Give this chocolate some stars!</label>
              <select value={this.state.rating} onChange={this.inputReviewStar} name="reviewStar" className="ui fluid dropdown">
                <option defaultValue="">0 Stars</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div>

                <div className="ui form">
                  <div className="field">
                    <label>Write your review below</label>
                    <textarea
                    value={this.state.content}
                    onChange={this.inputContent}
                    type="text"
                    placeholder="Write your review here..."
                    className="form-one-col" />
                  </div>
              </div>
              </div>

              <div>
              <button className="ui floated button"  form="review-form" type="submit" id="submit">Submit Review</button>
              </div>
          </form>
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
          submitReview: (rating, content, productId) => { //NEED TO ADD USERID TO SUBMIT HANDLER
          dispatch(addNewReview(rating, content, productId)) //NEED TO ADD USERID TO SUBMIT HANDLER
        }

        }
}


const ReviewFormContainer = connect(mapState, mapDispatch)(ReviewForm)

export default ReviewFormContainer
