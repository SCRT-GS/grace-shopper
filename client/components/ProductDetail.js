import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import store, { getProductDetail } from '../store'


/**
 * COMPONENT
 */
export class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: '',
      imgURL: '',
    }
  }

  componentDidMount() {
    const productId = Number(this.props.match.params.productId)
    const productDetailThunk = getProductDetail(productId)
    store.dispatch(productDetailThunk)
  }

  // const { products } = props
  // const productish = products.filter(elem => elem.id === productId)
  // const product = productish[0]

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
    products: state.products
  }
}

const mapDispatch = { getProductDetail }

export default connect(mapState, mapDispatch)(ProductDetail)

/**
 * PROP TYPES
 */

