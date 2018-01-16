import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link, NavLink} from 'react-router-dom'
import {logout} from '../store'
import ProductList from './ProductList'
// import store, {getUsers} from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn, isAdmin} = props
  console.log("USER: ", isAdmin)
  return (
    <div >
      <nav className="ui text menu">
      <h1 className="item">Forestero</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Shop</NavLink>
      <NavLink to="/cart">Cart</NavLink>


        {
          isLoggedIn && !isAdmin
            ? (<div>
              {/* The navbar will show these links after you log in */}

              <NavLink to="/my-account">My Account</NavLink>
              <a href="#" onClick={handleClick}>Logout</a>
            </div>)
            : isAdmin ? (<div>
              {/* The navbar will show these links before you log in */}
              <NavLink to="/my-account">My Account</NavLink>

              <NavLink to="/admin/products">Proucts</NavLink>
              <NavLink to="/admin/users">Users</NavLink>
              <a href="#" onClick={handleClick}>Logout</a>
            </div>)
            : (<div>

              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>

              </div>)
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
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin
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




