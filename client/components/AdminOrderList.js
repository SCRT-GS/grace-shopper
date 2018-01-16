import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


export class AdminOrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      status: 'All',
    }

    this.inputStatus = this.inputStatus.bind(this)
  }

  inputStatus(evt) {
    this.setState({
      status: evt.target.value
    })
  }

  render() {
    const allOrder = this.props.orders
    const products = this.props.products

    const displayOrders = this.props.orders.filter( order => {
      if (this.state.status === 'All') {
        return allOrder
      }
        return order.status === this.state.status;
      })

    return (
      <div>

        <select onChange={this.inputStatus} className="select-type">
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="Processing">Processing</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Completed">Completed</option>
        </select>
        <h1>
          {this.state.status} Orders
        </h1>

        {
          // console.log(displayOrders)
          displayOrders.length === 0 ?
            <h2>
              No {this.state.status} orders to display
            </h2> :

          displayOrders.map((order) => {
          const items = order.order_items
          const sum = (items.reduce((total, item) => {
            return total + item.price * item.quantity
          }, 0)) / 100
          let count = 0
          let date = order.createdAt || 'today'

          return (
            <ul
              key={order.id}
            >
              <li>
                <NavLink
                  to={`/admin/orders/${order.id}`}
                >
                  <h3>
                    Order # {order.id}
                  </h3>
                  <h3
                    className="order-status"
                  >
                    Order Status: {order.status}
                  </h3>
                  <h4
                    id="order-item"
                  >
                    Items:{items.map(orderItem => {
                      count++

                      let idx = orderItem.productId - 1
                      let product = products[idx]

                      const realPrice = (orderItem.price / 100)

                      return (
                        <ul
                          key={count}
                        >
                          <li>
                            <p>
                              {count}.
                          </p>
                            <p>
                              {products[idx] ? products[idx].name : null}
                            </p>
                            <p>
                              ${realPrice}
                            </p>
                            <p>
                              Quantity: {orderItem.quantity}
                            </p>
                          </li>
                        </ul>
                      )
                    })}
                  </h4>
                  <p
                    id="total"
                  >
                    Order Total: ${sum}
                  </p>
                  <p
                    id="date"
                  >
                    Date Placed: {date.slice(0, 10)}</p>
                </NavLink>
              </li>
            </ul>
          )
        }
        )
      }
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
