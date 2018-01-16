import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import store, { getProduct, getProductReviews, addToCart } from '../store'
import { ReviewList } from './ReviewList'


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
    const product = getProductReviews(productId)
    const productDetailThunk = getProduct(productId)
    store.dispatch(productDetailThunk)
    store.dispatch(product)

  }


  render() {

    const product = this.props.product
    const categories = product.categories || [{name: 'notaname'}]
    console.log('productwithcats?', categories[0])

    return (
      <div>
        <h3>{product.name}</h3>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>
        <img
          id="product-pic"
          src={product.imgURL}
        />
        {product.quantity === 0 ? (
          <h3>
          Currently Unavailable
          </h3>) : null}
        <h4>
        Categories: {categories.map(category => {
          return (
            <ul
            key={category.name}
            >
            <li>
            {category.name}
            </li>
            </ul>
          )}
        )}</h4>
        <div>
          <button
          onClick={() => store.dispatch(addToCart(product.id, 1, product.price))}
          >
          Add to cart
          </button>
        </div>
        <Link to={`/products/${product.id}/new-review`}>
          <div>
            <button>Write a review</button>
          </div>
        </Link>

        <ReviewList currentProduct={this.props} />
      </div>
    )
  }
}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    product: state.product,
    productReviews: state.productReviews,
  }
}

const mapDispatch = { getProduct, getProductReviews }

export default connect(mapState, mapDispatch)(ProductDetail)

/**
 * PROP TYPES
 */

