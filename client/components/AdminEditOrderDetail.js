import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { getOrder, updateOrder } from '../store'


export class AdminEditOrderDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: null,
    }

    this.submit = this.submit.bind(this);
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


  render() {
    const order = this.props.order
    const products = this.props.products || [{
      name: 'Pacari - Super Milky',
      description: 'Single Origin Hybrid, 30% cacao',
      price: 1599,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'
    }]
    const items = order.order_items || [{
      id: 99,
      name: 'Chocolate Bar',
      price: 1099,
      quantity: 2,
      imgURL: 'http://via.placeholder.com/32x32'
    }]
    const sum = (items.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)) / 100
    const date = order.createdAt || 'today'

    let count = 0
    let idx = count

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
                  Quantity: {item.quantity}
                </p>
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
        <p
          id="status"
        >
          Select New Order Status
        </p>
        <form
          id="orderform"
          onSubmit={this.submit}
        >
          <select
            form="orderform"
            name="status"
          >
            <option
              value="Processing"
            >
              Processing
            </option>
            <option
              value="Cancelled"
            >
              Cancelled
            </option>
            <option
              value="Completed"
            >
              Completed
            </option>
          </select>
          <button
            id="submit"
            type="submit"
          >
            Set New Order Status
          </button>
        </form>


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
const mapDispatch = { getOrder, updateOrder }

export default connect(mapState, mapDispatch)(AdminEditOrderDetail)
