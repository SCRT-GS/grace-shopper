import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link, NavLink} from 'react-router-dom'
import {logout} from '../store'
import ProductList from './ProductList'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div>
      <h1>MVP Chocolate Store</h1>
      <h2>Some links are for [dev]elopment purposes</h2>
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Shop</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      {/* temporary navlinks for development */}
      <NavLink to="/checkout">Checkout[dev]</NavLink>
      <NavLink to="/home">Home[dev]</NavLink>
      <NavLink to="/my-account">My Account[dev]</NavLink>
      <NavLink to="/admin">Admin Home[dev]</NavLink>
      <NavLink to="/admin/products">Admin Proucts[dev]</NavLink>
      <NavLink to="/admin/users">Admin Users[dev]</NavLink>
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/my-account">My Account</NavLink>
              <a href="#" onClick={handleClick}>Logout</a>
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </div>
        }
      </nav>
      <hr />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
// Main.propTypes = {
//   // children: PropTypes.object,
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
