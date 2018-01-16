import React from 'react'

export default function Subtotal(props) {
    return (
        <span>
            Subtotal: {props.calculateSubTotal(props.orderItems)}
        </span>
    )
}
