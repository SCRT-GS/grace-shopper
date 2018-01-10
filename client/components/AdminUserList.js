import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {deleteUser} from '../store'

/**
 * COMPONENT
 */
export const AdminUserList = (props) => {
  const users  = props.users
  console.log(props.users)
  const deleteUser = props.deleteUser

  return (
    <div>
      <h3>Welcome to the Admin's User List!</h3>
      <table className="table">
      <thead>
      <tr>
      <th>User I.D.</th>
      <th>Email Address</th>
      <th>{'Role  '}</th>
      <th>Reset Password?</th>
      <th>{'&nbsp;&nbsp;Update User  '}</th>
      <th>Delete User</th>
    </tr>
    </thead>
    <tbody>
    {users.map((user) => {
      return (
          <tr key={user.id}>
          <td> {user.id} </td>
                <td className="user-info">{user.email} </td>
                <td className="user-info">{user.isAdmin ? 'Admin' : 'User' }</td>
                <td className="user-info">{user.resetPassword ? 'Yes' : 'No'}</td>
                <td>
                  <NavLink to='/home'>
                    Update User Details
                  </NavLink>
                </td>
                <td>
                <button
                  id="delete"
                  onClick={() => deleteUser(user.id) }
                  type="delete"
                >
                  {'     Delete User     '}
                </button>
                </td>
          </tr>
        )
      })}
      </tbody>
      </table>
    </div>
  )
}

/**
 * CONTAINER
 * //NavLink to={`/admin/users/${user.id}`} style={{ textDecoration: 'none' }}
 */
const mapState = (state) => {
  return {
    users: state.users
  }
}
const mapDispatch = { deleteUser }


export default connect(mapState, mapDispatch)(AdminUserList)

//PROP TYPES

// UserHome.propTypes = {
//   email: PropTypes.string
// }

