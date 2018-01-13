import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import store, { getSingleReview, getProduct } from '../store'

export class OrderSubmitted extends Component {


    render() {

        return (
            <div>
              <h1>Your order was successfull submitted!</h1>
              <h2>You'll be enjoying heavenly exquisite chocolate soon!</h2>

              <Link to='/products'>
                <button>Continue shopping for delicious chocolate</button>
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

  // const mapDispatch = {getSingleReview, getProduct }

  export default connect(mapState)(OrderSubmitted)

