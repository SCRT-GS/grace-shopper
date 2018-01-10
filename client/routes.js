import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Login, Signup, UserHome, ProductList, ProductDetail, AdminUserList, AdminEditUserDetail, ReviewForm } from './components'
import store, { me, getProducts, getUsers, getReviews } from './store'



/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    const productsThunk = getProducts()
    const usersThunk = getUsers()
    const reviewsThunk = getReviews()
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
              nextProp="something"
              path="/products/:productId"
            />

            <Route exact path="/admin/users" component={AdminUserList}
            />
            <Route exact path="/admin/users/:userId" component={AdminEditUserDetail}
            />

            <Route
              exact
              path="/product/:productId/new-review"
              component={ReviewForm}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
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
    isLoggedIn: !!state.user.id
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
