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

    const displayOrders = this.props.orders.filter(order => {
      if (this.state.status === 'All') {
        return allOrder
      }
      return order.status === this.state.status;
    })

    return (
      <div>
        <h2 className="ui icon header">
          <i className="circular truck icon"></i>
            <div className="content">
          Manage Orders
            </div>
          </h2>
        <select onChange={this.inputStatus} className="ui dropdown dropdown-orders">
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="Processing">Processing</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Completed">Completed</option>
        </select>

        {
          displayOrders.length === 0 ?
            <h2>
              No {this.state.status} orders to display
            </h2> : 
            <ul
              className="ui relaxed divided list"
              >
            {displayOrders.map((order) => {
              const items = order.order_items
              const sum = (items.reduce((total, item) => {
                return total + item.price * item.quantity
              }, 0)) / 100
              let count = 0
              let date = order.createdAt || 'today'

              return (
                <div
                  className="item"
                  key={order.id}
                >
                  
                    <NavLink
                      to={`/admin/orders/${order.id}`}
                    >
                    <div className="ui grid">
                      <div className="two wide column">
                        <span># {order.id}</span>
                      </div>
                      <div className="six wide column">
                        <span>{order.email}</span>
                      </div>
                      <div className="two wide column">
                        <span>{order.status}</span>
                      </div>
                      <div className="two wide column">
                        <span>${sum}</span>
                      </div>
                      <div className="four wide column">
                        <span>{date.slice(0, 10)}</span>
                      </div>
                      
                    </div>
                    </NavLink>
                  </div>
                
              )
            }
            
            )
        }
      </ul>
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
