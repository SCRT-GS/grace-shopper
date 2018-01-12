import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import store, { getProduct } from '../store'


/**
 * COMPONENT
 */
export class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: 0,
      imgURL: '',
    }
  }

  componentDidMount() {
    const productId = Number(this.props.match.params.productId)
    const productDetailThunk = getProduct(productId)
    store.dispatch(productDetailThunk)
  }


  render() {

    const product = this.props.product

    return (
      <div>
        <h3>{product.name}</h3>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>
        <img
          id="product-pic"
          src={product.imgURL}
        />
      </div>
    )
  }
}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    product: state.product
  }
}

const mapDispatch = { getProduct }

export default connect(mapState, mapDispatch)(ProductDetail)

/**
 * PROP TYPES
 */

