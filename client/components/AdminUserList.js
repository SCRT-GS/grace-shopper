import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteUser } from '../store'


export const AdminUserList = (props) => {
  const users = props.users
  const deleteUser = props.deleteUser

  return (
    <div>
    <h2 className="ui icon header">
    <div className="content">
      Admin User Dashboard
  </div>
  </h2>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>User I.D.</th>
            <th>Email Address</th>
            <th>Role</th>
            <th>Reset Password?</th>
            <th>Update User</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  {user.id}
                </td>
                <td className="user-info">
                  {user.email}
                </td>
                <td className="user-info">
                  {user.isAdmin ? 'Admin' : 'User'}
                </td>
                <td className="user-info">
                  {user.resetPassword ? 'Yes' : 'No'}
                </td>
                <td>
                  <NavLink
                  to={`/admin/users/${user.id}`}
                  style={{ textDecoration: 'none' }}
                  >
                    Update User Details
                  </NavLink>
                </td>
                <td>
                <div className="ui button">
                  <button
                    id="delete"
                    onClick={() => deleteUser(user.id)}
                    type="delete"
                  >
                  <i className="right remove icon"></i>
                  </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const mapState = (state) => {
  return {
    users: state.users
  }
}
const mapDispatch = { deleteUser }


export default connect(mapState, mapDispatch)(AdminUserList)



