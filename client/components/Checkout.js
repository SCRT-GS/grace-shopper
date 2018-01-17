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
      zip: '',
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

  inputEmail(evt) {
    this.setState({
      email: evt.target.value
    })
  }

  inputLineOne(evt) {
    this.setState({
      line1: evt.target.value
    })
  }

  inputLineTwo(evt) {
    this.setState({
      line2: evt.target.value
    })
  }

  inputCity(evt) {
    this.setState({
      city: evt.target.value
    })
  }

  inputState(evt) {
    this.setState({
      state: evt.target.value
    })
  }

  inputZip(evt) {
    this.setState({
      zip: evt.target.value
    })
  }

  handleCheckoutSubmit(evt) {
    evt.preventDefault()
    const orderId = this.props.cart.id
    const userId = this.props.user.id
    const processingStatus = 'Processing'
    const orderEmail = this.state.email
    const updatedOrder = {
      email: orderEmail,
      status: processingStatus,
      userId: userId
    }
    this.props.submitCheckout(this.state.line1, this.state.line2, this.state.city, this.state.state, this.state.zip, this.state.orderId)
    this.props.processingOrder(orderId, updatedOrder)
    this.props.history.push(`/order-submitted`)
  }


  render() {

    const selectState = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

    console.log("PROPS: ", this.props)

    return (
      <div>
        <div id="label-checkout">
          <h1>YOU'RE STEPS AWAY FROM ENJOYING DELICIOUS CHOCOLATE!</h1>
        </div>

        <h3 className="ui dividing header">Shipping Information</h3>
        <div className="ui form">
          <form onSubmit={this.handleCheckoutSubmit} className="ui-form" id="checkout-form">

            <div className="required field">
              <label>Email</label>
              <input value={this.state.email} onChange={this.inputEmail} type="text" placeholder="Email" required />
            </div>
            <h4 className="ui dividing header"></h4>

            <div className="field">

              <label>Name</label>
              <div className="two fields">
                <div className="field">
                  <input type="text" name="shipping[first-name]" placeholder="First Name" />
                </div>
                <div className="field">
                  <input type="text" name="shipping[last-name]" placeholder="Last Name" />
                </div>
              </div>

            </div>



            <h4 className="ui dividing header"></h4>
            <div className="field">
              <label>Shipping Address</label>
              <div className="fields">
                <div className="twelve wide field">
                  <input value={this.state.line1} onChange={this.inputLineOne} type="text" placeholder="Address" required />
                </div>
                <div className="four wide field">
                  <input value={this.state.line2} onChange={this.inputLineTwo} type="text" placeholder="Apt, suite, etc. (optional)" />
                </div>
              </div>
            </div>

            <div className="ui form">
              <div className="field">
                <div className="three fields">
                  <div className="field">

                    <input value={this.state.city} onChange={this.inputCity} type="text" placeholder="City" required />
                  </div>
                  <div className="field">
                    <select value={this.state.state} onChange={this.inputState} className="ui fluid dropdown" required >
                      <option>State</option>
                      {
                        selectState.map(selectedState =>
                          <option key={selectedState} value={selectedState}>{selectedState} </option>)
                      }
                    </select>
                  </div>
                  <div className="field">
                    <input value={this.state.zip} onChange={this.inputZip} type="text" placeholder="Zip code" className="form-two-col" required />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="div-submit">
          <Link to="/products">
            <button
              type='button'
              className="ui right floated button"
            >
              SHOP MORE
        </button>
          </Link>
          <button className="ui primary right floated button" form="checkout-form" type="submit">SUBMIT ORDER</button>
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
