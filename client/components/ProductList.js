import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const ProductList = (props) => {
  const {products} = props

  return (
    <div>
      <h3>Welcome to the Products Page!</h3>
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
// const mapDispatch = (state) => {

// }

export default connect(mapState)(ProductList)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
