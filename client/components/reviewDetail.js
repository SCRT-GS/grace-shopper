import React from 'react'
//getting the review details passed down as a prop

const reviewDetail = props => {
    return (
        <div>
            <h2>{props.product}></h2>
            <p>{props.description}</p>
                <p>
                {[...Array(props.rating)].map(e => '*').join('')}
                </p>
                <p>{props.text}</p>
        </div>
    )
}
export default reviewDetail
