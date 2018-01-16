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
    const userOrders = this.props.userOrders || [{
      session: 'rrr',
      email: 'cody@email.com',
      status: 'Created',
      userId: 1
    }]


    const products = this.props.products
    return (
      <div>
        <h1>My Orders </h1>
        {userOrders.map((order) => {
          const orderItems = order.order_items || [{
            id: 99,
            name: 'Chocolate Bar',
            price: 1099,
            quantity: 2,
            imgURL: 'http://via.placeholder.com/32x32'
          }]
          const sum = (orderItems.reduce((total, item) => {
            return total + item.price * item.quantity
          }, 0)) / 100

          let count = 0
          let date = order.createdAt || 'today'
          return (

            <ul key={order.id} >
              <li>
                <NavLink to={`/my-account/orders/${order.id}`} >
                  <h3>Order # {order.id}</h3>
                  <h4 id="order-item">Items:{orderItems.map(orderItem => {
                    count++
                    let idx = orderItem.productId - 1
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
                  <p id="date">Date Placed: {date.slice(0, 10)}}</p>
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
    products: state.products,
    userOrders: state.userOrders
  }
}


export default connect(mapState)(MyOrders)
