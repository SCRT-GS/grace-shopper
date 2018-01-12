import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import store, { getMyOrders } from '../store'


class MyOrders extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const userId = this.props.userId
    const getMyOrdersThunks = getMyOrders(userId)
    store.dispatch(getMyOrdersThunks)
  }


  render() {
    const orders = this.props.myOrders
    return (
      <div>
        <h3>My Orders </h3>
        {orders.map((order) => {
          return (
            <ul key={order.id} >
              <li>
                <NavLink to={`/orderss/${order.id}`} >
                  <h2 id="total">Order Total</h2>
                  <h3 id="date">Date Placed</h3>
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
    orders: state.orders
  }
}


export default connect(mapState)(MyOrders)
