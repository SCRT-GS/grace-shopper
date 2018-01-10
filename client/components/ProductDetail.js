import React from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../store'

/**
 * COMPONENT
 */
export const ProductDetail = (props) => {

  componentDidMount() {
    const productThunk = getProduct(productId);
    store.dispatch(productThunk);
  }

  const product = props.product
  //const productId = props.match.params.id

  console.log(props.product)

  return (
    <div>
      <h3>{product.name}</h3>
      <h3>{product.description}</h3>
      <h3>{product.price}</h3>
      <img id="product-pic" src={product.imgURL} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    product: state.product
  }
}
// const mapDispatch = (state) => {

export default connect(mapState)(ProductDetail)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
