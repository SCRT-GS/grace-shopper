import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store, { addNewAddress, updateOrder } from '../store'


/**********************


Still need to add ORDER ID to Address


***********************/

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: 0,
      orderId: null,
    }

    this.inputEmail = this.inputEmail.bind(this)
    this.inputLineOne = this.inputLineOne.bind(this)
    this.inputLineTwo = this.inputLineTwo.bind(this)
    this.inputCity = this.inputCity.bind(this)
    this.inputState = this.inputState.bind(this)
    this.inputZip = this.inputZip.bind(this)
    this.handleCheckoutSubmit = this.handleCheckoutSubmit.bind(this)

  }

  componentWillMount() {
    this.setState({
      orderId: this.props.cart.id
    })
  }

  inputEmail(evt){
    this.setState({
      email: evt.target.value
    })
  }

  inputLineOne(evt){
    this.setState({
      line1: evt.target.value
    })
  }

  inputLineTwo(evt){
    this.setState({
      line2: evt.target.value
    })
  }

  inputCity(evt){
    this.setState({
      city: evt.target.value
    })
  }

  inputState(evt){
    this.setState({
      state: evt.target.value
    })
  }

  inputZip(evt){
    this.setState({
      zip: evt.target.value
    })
  }

  handleCheckoutSubmit(evt) {
    evt.preventDefault()
    const orderId = this.props.cart.id
    const processingStatus = 'Processing'
    const orderEmail = this.state.email
    const updatedOrder = {
      email: orderEmail,
      status: processingStatus
    }
    this.props.submitCheckout(this.state.line1, this.state.line2, this.state.city, this.state.state, this.state.zip, this.state.orderId)
    this.props.processingOrder(orderId, updatedOrder)
    this.props.history.push(`/order-submitted`)
  }


render() {

  const selectState = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

    console.log("PROPS: ", this.props)

  return (
    <div id="checkout-page-container">
      <div id="label-checkout">
        <label>Customer Information</label>
      </div>
      <div id="form-container">
      <form onSubmit={this.handleCheckoutSubmit} className="checkout-form" id="checkout-form">
        <div>
          <input value={this.state.email} onChange={this.inputEmail} type="text" placeholder="Email" className="form-one-col" required />
        </div>
        <div>
          <p>Already have an account? <Link to="/login" className="component-link">Log in here</Link></p>
        </div>
        <div id="label-checkout">
          <label>Shipping Address</label>
        </div>
        <div>
          <input value={this.state.line1} onChange={this.inputLineOne} type="text" placeholder="Address" className="form-two-col" />
          <input value={this.state.line2} onChange={this.inputLineTwo} type="text" placeholder="Apt, suite, etc. (optional)" className="form-two-col" />
        </div>
        <div>
        <input value={this.state.city} onChange={this.inputCity} type="text" placeholder="City" className="form-one-col" />
        </div>
        <div>
          <select value={this.state.state} onChange={this.inputState} className="select-state" >
            <option>State</option>
            {
              selectState.map(selectedState =>
                <option key={selectedState} value={selectedState}>{selectedState}</option>)
            }
          </select>
          <input value={this.state.zip} onChange={this.inputZip} type="text" placeholder="Zip code" className="form-two-col" />
        </div>
      </form>
        <div className="div-submit">
          <button className="checkout-submit" form="checkout-form" type="submit">Submit Order</button>
        </div>
      </div>
    </div>
  )
}
}


const mapState = state => {
return {
  product: state.product,
  user: state.user,
  auth: state.auth,
  cart: state.cart
};
};

const mapDispatch = (dispatch) => {
return {
    submitCheckout: (line1, line2, city, state, zip, orderId) => {
      dispatch(addNewAddress(line1, line2, city, state, zip, orderId))
    },
    processingOrder: (id, order) => {
      dispatch(updateOrder(id, order))
    }
  }
}

const CheckoutContainer = connect(mapState, mapDispatch)(Checkout)

export default CheckoutContainer
