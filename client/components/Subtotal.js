import React from 'react'

export default function Subtotal(props) {
    return (
        <h4>
            {props.calculateSubTotal(props.orderItems)}
        </h4>
    )
}
