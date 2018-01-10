import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
//import { getProduct } from '../store'

/**
 * COMPONENT
 */
export const ProductDetail = (props) => {

  const productId = Number(props.match.params.productId)
  const { products } = props

  const productish = products.filter(elem => elem.id === productId)

  //const newProductId = productId - 1
  const product = productish[0]

  console.log('PRODUCTS', products)
  console.log('PRODUCT', product)
  console.log('PRODUCTISH', productish)


  return (
    <div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    products: state.products
  }
}

export default withRouter(connect(mapState)(ProductDetail))

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }


// <h3>{product.name}</h3>
//       <h3>{product.description}</h3>
//       <h3>{product.price}</h3>
//       <img id="product-pic" src={product.imgURL}/>
