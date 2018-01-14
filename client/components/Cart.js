import React, {Component} from 'react'
import { connect } from 'react-redux'
import store, { getCart } from '../store'
import Subtotal from './Subtotal'
import { Link } from 'react-router-dom'


class Cart extends Component {
    constructor(){
        super()
        this.calculateSubTotal = this.calculateSubTotal.bind(this)
        this.centsToDollarString = this.centsToDollarString.bind(this)
    }

    componentDidMount(){
        const userId = this.props.userObject.id
        if (userId && !this.props.cart.id) {
            const getCartThunk = getCart(userId)
            store.dispatch(getCartThunk)
        }   
    }

    centsToDollarString(cents){
        if(typeof cents !== 'number') throw TypeError()
        const centStr = cents.toString()
        const justDollars = cents > 99 ? centStr.slice(0,-2) : '0'
        const justCents = cents > 9 ? centStr.slice(-2) : '0' + centStr
        return '$' + justDollars + '.' + justCents
    }

    calculateSubTotal(items){
        const sum = items.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
        return this.centsToDollarString(sum)
    }

    render(){
        const orderItems = this.props.cart.order_items || []
        return (
            <div>
                <h2>Cart</h2>
                <ul>
                    {
                        orderItems.map(item => {
                            return (
                                <li
                                    key={item.id}
                                >
                                    <img
                                        style={{width: '2em', height: '2em', display: 'inline'}}
                                        url={item.imgURL}
                                    />
                                    <span>
                                        {item.name}
                                    </span>
                                    <span>
                                        Quantity: {item.quantity}
                                    </span>
                                    <span>
                                        {this.centsToDollarString(item.price)}
                                    </span>
                                    <span>
                                        DELET THIS
                                    </span>

                                </li>
                            )
                        })
                    }
                </ul>
                <Subtotal 
                    calculateSubTotal={this.calculateSubTotal}
                    orderItems={this.props.cart.order_items || []}
                />
                <button 
                    type='button'
                >
                    SHOP MORE
                </button>
                <Link to="/checkout">
                    <button
                        type="button"
                    >
                        CHECKOUT
                    </button>
                </Link>
            </div>
        )
    }
}

const mapState = state => ({
   cart: state.cart,
   userObject: state.user
})

export default connect(mapState)(Cart)
