import React, {Component} from 'react'
import { connect } from 'react-redux'
import store, { getCart, deleteFromCart } from '../store'
import Subtotal from './Subtotal'
import { Link } from 'react-router-dom'


class Cart extends Component {
    constructor(){
        super()
        this.calculateSubTotal = this.calculateSubTotal.bind(this)
        this.centsToDollarString = this.centsToDollarString.bind(this)
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
        console.log('cart: ', this.props.cart)
        const orderItems = this.props.cart && this.props.cart.order_items || []
        return (
            <div>
                <h2 className="ui icon header">
                    <i className="circular cart icon"></i>
                    <div className="content">
                    Your Shopping Cart
                    </div>
                </h2>
                <ul className="ui relaxed divided list">
                    {
                        orderItems.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className="item"
                                >
                                <div className="ui grid">
                                <div className="two wide column">
                                    <img
                                        className="ui avatar image"
                                        src={item.imgURL}
                                    />
                                </div>
                                <div className="eight wide column">
                                    <span>
                                        {item.name}
                                    </span>
                                </div>
                                <div className="two wide column">
                                    <span>
                                        Quantity: {item.quantity}
                                    </span>
                                </div>
                                <div className="two wide column">
                                    <span>
                                        {this.centsToDollarString(item.price)}
                                    </span>
                                </div>
                                <div className="two wide column">
                                    <button
                                        className="circular ui icon button"
                                        type="button"
                                        onClick={() => store.dispatch(deleteFromCart(item.id))}
                                    >
                                    <i className="icon trash" />
                                    </button>
                                </div>
                                        
                                </div>
                                </div>
                            )
                        })
                    }
                </ul>
                <h4 className="ui ui sub header">
                    <Subtotal 
                        calculateSubTotal={this.calculateSubTotal}
                        orderItems={this.props.cart && this.props.cart.order_items || []}
                    />
                </h4>
                
                <button 
                    type='button'
                    className="ui right floated button"
                >
                    SHOP MORE
                </button>
                <Link to="/checkout">
                    <button
                        type="button"
                        className="ui primary right floated button"
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
