import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, {  updateUserPassword } from '../store'


export class ResetPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      resetPassword: false,
      isAdmin: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleSubmit(event) {
    event.preventDefault();

    const user = this.props.user;
    const id = user.id

    const updatedUser = {
      password: event.target.password.value,
      resetPassword: false,
    }

    this.props.updateUserPassword(id, updatedUser)
    this.props.history.push('/login')
  }


  render() {
    const user = this.props.user;

  return (
    <div>
      <form
      onSubmit={this.handleSubmit}
      >
      <h3> Welcome, {user.email}! Please reset your password below.</h3>
      <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Reset Password </button>
          <p>(You will be prompted to log in with this new password).</p>
        </div>
      </form>
    </div>
  )
}
}


const mapState = (state) => {
  return {
    user: state.user,
    users: state.users
  }
}
const mapDispatch = {  updateUserPassword }

export default connect(mapState, mapDispatch)(ResetPassword)
