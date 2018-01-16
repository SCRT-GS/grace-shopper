import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { getOrder } from '../store'
import axios from 'axios'
import {NavLink} from 'react-router-dom'


export class MyOrderDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: null,
    }


  }

  componentDidMount() {
    const orderId = Number(this.props.match.params.orderId)
    const orderThunk = getOrder(orderId)
    store.dispatch(orderThunk);
  }

  submit(event) {
    event.preventDefault();

    const order = this.props.order;
    const updatedOrder = {
      status: event.target.status.value
    }

    this.props.updateOrder(order.id, updatedOrder)
    // this.props.history.push(`/admin/orders`)
  }
  sendEmail(event) {
    event.preventDefault();

    const order = this.props.order;

    axios.post(`/api/users/admin/shipping-email`, order)
      .then(res => res.data)
      .catch(err => console.error(`Could not send email:`, err));
  }

  render() {
    const order = this.props.order
    const products = this.props.products || [{
      name: 'No Product to Display',
      description: 'No Product to Display',
      price: null,
      quantity: null,
      imgURL: 'http://via.placeholder.com/100x100'
    }]
    const items = order.order_items || [{
      id: 99,
      name: 'No Item to Display',
      price: null,
      quantity: null,
      imgURL: 'http://via.placeholder.com/32x32'
    }]
    const sum = (items.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)) / 100
    const date = order.createdAt || 'today'

    let count = 0

    return (
      <div>
        <h2
          className="order-number"
        >
          Order # {order.id}
        </h2>
        <h2
          className="order-number"
        >
          Ordered By: {order.email}
        </h2>
        <h2
          className="order-number"
        >
          Order Status: {order.status}
        </h2>
        <h4
          id="order-item"
        >
        </h4>
        {items.map(item => {
          count++

          let idx = item.productId - 1
          let product = products[idx]

          const realPrice = (item.price / 100)
          return (
            <ul
              key={item.id}
            >
              <li>
              <NavLink to={`/products/${item.productId}`}>

                <p>
                  {products[idx] ? products[idx].name : null}
                </p>
                <p>
                  ${realPrice}
                </p>
                <p>
                  Quantity: {item.quantity}
                </p>
                </NavLink>
              </li>
            </ul>
          )
        }
        )}

        {
          <p
            id="total"
          >
            Order Total: ${sum}
          </p>
        }
        <p
          id="date"
        >
          Date Placed: {date.slice(0, 10)}
        </p>

        <br />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    order: state.order,
    products: state.products
  }
}
const mapDispatch = { getOrder }

export default connect(mapState, mapDispatch)(MyOrderDetail)
