import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import store, { getOrders } from '../store'


export class AdminOrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }


  render() {
    const orders = this.props.orders
    const products = this.props.products
    return (
      <div>
        <h1>All Orders </h1>
        {orders.map((order) => {
          const sum = (order.order_items.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0))/100
        let count = 0
          return (

            <ul key={order.id} >
              <li>
                <NavLink to={`/admin/orders/${order.id}`} >
                <h3>Order # {order.id}</h3>
                  <h4 id="order-item">Items:{order.order_items.map(orderItem => {
                    const products1 = products
                    count++
                    const realPrice = (orderItem.price / 100)
                    const lineTotal = (orderItem.price * orderItem.quantity)


                    return (
                      <ul key={orderItem.id} >
                        <li>
                          <p>{count}.</p>
                          {products.map(product => {
                            return (
                              <ul key={product.id} >
                                <p>{product.name}</p>
                              </ul>
                            )
                          })}
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
    orders: state.orders,
    products: state.products
  }
}


export default connect(mapState)(AdminOrderList)
