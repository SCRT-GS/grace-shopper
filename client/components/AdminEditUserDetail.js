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
        <h2 className="ui icon header">
          <i className="circular address card outline icon"></i>
          <div className="content">
            Edit User Details
        </div>
        </h2>

        <div className="centered ui card">
          <div className="content">
            <div className="header">{user.email}</div>
          </div>
          <div className="content">
            <h4 >
              User Privileges: {user.isAdmin ? ' Admin' : ' User'}
            </h4>
            <h4 >
              Password Reset Pending? {user.resetPassword ? ' Yes' : ' No'}
            </h4>
          </div>
        </div>
        <h4 className="ui horizontal divider header">
          UPDATE USER
      </h4>
        <div className="ui form">
          <form
            id="userform"
            onSubmit={this.submit}
          >
            <div className="fields">
              <div className="ui four wide field">
                <label>
                  Email
        </label>
                <input
                  name="email"
                  type="text"
                  placeholder={user.email}
                />
              </div>
              <div className="ui six wide field">
                <label>
                  Admin Privileges
          </label>
                <select
                  form="userform"
                  name="isAdmin"
                  className="ui selection dropdown"
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
              </div>
              <div className="ui six wide field">

                <label>
                  Password Reset Pending
        </label>
                <select
                  form="userform"
                  name="resetPassword"
                  className="ui selection dropdown"
                >
                  <option
                  className="content"
                    value={user.resetPassword ? 'Reset pending' : 'No reset pending'}
                  >
                    {user.resetPassword ? 'Reset pending' : 'No reset pending'}
                  </option>
                  <option
                  className="content"
                    value={user.resetPassword ? 'No reset pending' : 'Reset pending'}
                  >
                    {user.resetPassword ? 'No reset pending' : 'Reset pending'}
                  </option>
                </select>
              </div>

              <button
                id="submit"
                type="submit"
                className="ui button"
              >
                Save Changes
          </button>
            </div>
          </form>
        </div>
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
