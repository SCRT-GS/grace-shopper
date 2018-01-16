import React from 'react'

export default function Subtotal(props) {
    return (
        <h4>
            Subtotal: {props.calculateSubTotal(props.orderItems)}
        </h4>
    )
}
