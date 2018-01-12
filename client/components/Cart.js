import React, {Component} from 'react'
import { connect } from 'react-redux'

//orderItems: [orderItem1, orderItem2]
//cart:

class Cart extends Component {
    constructor(){
        super()
        this.subTotal = this.subTotal.bind(this)
    }

    centsToDollarString(cents){
        if(typeof cents !== 'number') throw TypeError()
        const centStr = cents.toString()
        const justDollars = cents > 99 ? centStr.slice(0,-2) : '0'
        const justCents = cents > 9 ? centStr.slice(-2) : '0' + centStr
        return '$' + justDollars + '.' + justCents
    }

    subTotal(){
        const orderItems = this.props.orderItems || [{
            id: 99,
            name: 'Chocolate Bar',
            price: 1099,
            quantity: 2,
            imgURL: 'http://via.placeholder.com/32x32'
        }]
        const sum = orderItems.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
        return this.centsToDollarString(sum)
    }

    //a list of stacked order items
    render(){
        const orderItems = this.props.orderItems || [{
            id: 99,
            name: 'Chocolate Bar',
            price: 1099,
            quantity: 2,
            imgURL: 'http://via.placeholder.com/32x32'
        }]
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
                <h4>
                    Subtotal: {this.subTotal()}
                </h4>
                <button 
                    type='button'
                >
                    SHOP MORE
                </button>
                <button 
                    type='button'
                >
                    CHECKOUT
                </button>
            </div>
        )
    }
}

const mapState = state => ({
    
})
export default connect(mapState)(Cart)