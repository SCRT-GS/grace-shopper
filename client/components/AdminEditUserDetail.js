import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { getAdminUser, updateUser } from '../store'


export class AdminEditUserDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      resetPassword: false,
      isAdmin: false
    }

    this.submit = this.submit.bind(this);

  }

  componentDidMount() {
    const userId = Number(this.props.match.params.userId)
    const adminUserThunk = getAdminUser(userId)
    store.dispatch(adminUserThunk);
  }

  submit(event) {
    event.preventDefault();

    const adminUser = this.props.adminUser;
    const id = adminUser.id
    const newEmail = (event.target.email.value ? event.target.email.value : adminUser.email)
    const newIsAdmin = (event.target.isAdmin.value === 'Admin' ? true : false);
    const newResetPassword = (event.target.resetPassword.value === 'Reset pending' ? true : false);

    const updatedAdminUser = {
      email: newEmail,
      isAdmin: newIsAdmin,
      resetPassword: newResetPassword,
    }

    this.props.updateUser(id, updatedAdminUser)
    this.props.history.push('/admin/users')
  }


  render() {
    const user = this.props.adminUser


    return (
      <div>
        <h3>
          User Details
        </h3>
        <h2>
          User Email: {user.email}
        </h2>
        <h2>
          User Privileges: {user.isAdmin ? ' Admin' : ' User'}
        </h2>
        <h2>
          Password Reset Pending? {user.resetPassword ? ' Yes' : ' No'}
        </h2>
        <form
          id="userform"
          onSubmit={this.submit}
        >
          <p>
            Change the user's email address below.
        </p>
          <input
            name="email"
            type="text"
            className="form-like"
            placeholder={user.email}
          />
          <p>
            Change the user's administrator privileges below.
          </p>
          <select
            form="userform"
            name="isAdmin"
          >
            <option
              value={user.isAdmin ? 'Admin' : 'User'}
            >
              {user.isAdmin ? 'Admin' : 'User'}
            </option>
            <option
              value={user.isAdmin ? 'User' : 'Admin'}
            >
              {user.isAdmin ? 'User' : 'Admin'}
            </option>
          </select>
          <p>
            Change the user's password status below.
        </p>
          <select
            form="userform"
            name="resetPassword"
          >
            <option
              value={user.resetPassword ? 'Reset pending' : 'No reset pending'}
            >
              {user.resetPassword ? 'Reset pending' : 'No reset pending'}
            </option>
            <option
              value={user.resetPassword ? 'No reset pending' : 'Reset pending'}
            >
              {user.resetPassword ? 'No reset pending' : 'Reset pending'}
            </option>
          </select>


          <button
            id="submit"
            type="submit"
          >
            Save Changes
          </button>
        </form>
        <br />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    adminUser: state.adminUser,
    users: state.users
  }
}
const mapDispatch = { getAdminUser, updateUser }

export default connect(mapState, mapDispatch)(AdminEditUserDetail)
