import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import store, { getMyOrders } from '../store'


class MyOrders extends Component {
  constructor() {
    super()
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    const userId = this.props.user.id
    const getMyOrdersThunk = getMyOrders(userId)
    store.dispatch(getMyOrdersThunk)
  }

  render() {
    const orders = this.props.orders || [{
      session: 'rrr',
      email: 'cody@email.com',
      status: 'Created',
      userId: 1
    }]
    const orderItems = orders.order_items || [{
      id: 99,
      name: 'Chocolate Bar',
      price: 1099,
      quantity: 2,
      imgURL: 'http://via.placeholder.com/32x32'
    }]

    const products = this.props.products

    return (
      <div>
        <h1>My Orders </h1>
        {orders.map((order) => {
          const sum = (orderItems.reduce((total, item) => {
            return total + item.price * item.quantity
          }, 0)) / 100
          let count = 0
          return (

            <ul key={order.id} >
              <li>
                <NavLink to={`/my-account/orders/${order.id}`} >
                  <h3>Order # {order.id}</h3>
                  <h4 id="order-item">Items:{orderItems.map(orderItem => {
                    count++
                    let idx = orderItem.productId - 1
                    let product = products[idx]
                    const realPrice = (orderItem.price / 100)
                    return (
                      <ul key={orderItem.id} >
                        <li>
                          <p>{count}.</p>
                          <p>{products[idx] ? products[idx].name : null}</p>
                          <p>${realPrice}</p>
                          <p>Quantity: {orderItem.quantity}</p>
                        </li>
                      </ul>
                    )
                  })}</h4>
                  <p id="total">Order Total: ${sum}</p>
                  <p id="date">Date Placed: {order.createdAt}</p>
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

const mapState = (state) => {
  return {
    user: state.user,
    orders: state.orders,
    products: state.products
  }
}


export default connect(mapState)(MyOrders)
