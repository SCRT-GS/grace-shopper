import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'

import { Main, Login, Signup, UserHome, ProductList, ProductDetail, AdminHome, AdminUserList, AdminEditUserDetail, AdminEditProductDetail, AdminEditOrderDetail, AdminProductList, AdminOrderList, ReviewForm, Cart, Checkout, ReviewDetail, OrderSubmitted } from './components'
import store, { me, getProducts, getUsers, getReviews, getCart, getOrders } from './store'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    const productsThunk = getProducts()
    const usersThunk = getUsers()
    const reviewsThunk = getReviews()
    const getAllOrdersThunk = getOrders()
    store.dispatch(getAllOrdersThunk)
    store.dispatch(usersThunk);
    store.dispatch(productsThunk);
    store.dispatch(reviewsThunk);
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <Router history={history}>
        {/* <ErrorMessage/> */}
        <Main>
          <Switch>

            <Route
              component={ProductList}
              exact
              nextProp="hello"
              path="/products"
            />

            <Route
              component={ProductDetail}
              exact
              path="/products/:productId"
            />
            <Route
              component={AdminEditProductDetail}
              exact
              path="/admin/products/:productId"
            />
            <Route
              component={AdminProductList}
              exact
              path="/admin/products/"
            />
            <Route
              component={AdminHome}
              exact
              path="/admin"
            />

            <Route
              component={OrderSubmitted}
              exact
              path="/order-submitted"
            />

            <Route
              exact
              path="/admin/users"
              component={AdminUserList}
            />

            <Route
              exact
              path="/admin/users/:userId"
              component={AdminEditUserDetail}
            />
            <Route
              exact
              path="/admin/orders/:orderId"
              component={AdminEditOrderDetail}
            />
            <Route
              exact
              path="/admin/orders"
              component={AdminOrderList}
            />

            <Route
              exact
              path="/reviews/:reviewId"
              component={ReviewDetail}
            />

            <Route
              exact
              path="/checkout"
              component={Checkout}
            />

            <Route
              exact
              path="/products/:productId/new-review"
              component={ReviewForm}
            />



            <Route
              exact
              path="/login"
              component={Login}
            />

            <Route
              exact
              path="/signup"
              component={Signup}
            />

            <Route
              exact
              path="/cart"
              component={Cart}
            />

            {
              isLoggedIn &&
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route exact path="/home" component={UserHome} />
              </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,

  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
