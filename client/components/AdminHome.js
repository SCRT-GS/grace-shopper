import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


export const AdminHome = (props) => {

  return (
    <div>
      <h3 className="funny">Admin Dashboard</h3>
      <NavLink
        to={`/admin/users`}
        style={{ textDecoration: 'none' }}
      >
        Users
          </NavLink>
      <NavLink
        to={`/admin/products`}
        style={{ textDecoration: 'none' }}
      >
        Products
            </NavLink>
      <NavLink
        to={`/admin/orders`}
        style={{ textDecoration: 'none' }}
      >
        Orders
              </NavLink>
      <NavLink
        to={`/admin/categories`}
        style={{ textDecoration: 'none' }}
      >
        Categories
                </NavLink>
    </div>
  )
}

const mapState = (state) => {
  return {products: state.products
}
}

export default connect(mapState)(AdminHome)

