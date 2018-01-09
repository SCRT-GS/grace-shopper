import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router'

/**
 * COMPONENT
 */
export const AdminEditUserDetail = (props) => {
  // const products  = props.products
  // console.log(props.products)

  return (
    <div>
      <h3>Welcome to the Admin's Detail Page!</h3>
      {/*products.map((product) => {
        return (
          <li key={product.id} >
          {/*}
          <NavLink to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
          <img id="product-pic" src={product.imgURL} />
            <h3 id="product-prof">{product.name}</h3>
            <h3 id="product-prof"> ${product.price}</h3>
            <button>Add to Cart</button>
        </NavLink> )
      }
      )}*/}

    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    users: state.products
  }
}
// const mapDispatch = (state) => {

// }

export default connect(mapState)(AdminEditUserDetail)

//PROP TYPES

// UserHome.propTypes = {
//   email: PropTypes.string
// }
