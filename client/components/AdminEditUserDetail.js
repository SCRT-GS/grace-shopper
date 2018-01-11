import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router'
import store, { getAdminUser, updateUser } from '../store'
/**
 * COMPONENT
 */
export class AdminEditUserDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      resetPassword: false,
      isAdmin: false
    }
    this.submit = this.submit.bind(this);

  }

  componentDidMount(){
    const userId = Number(this.props.match.params.userId)
    const adminUserThunk = getAdminUser(userId)
    store.dispatch(adminUserThunk);
  }
  reset(){

  }
  submit(event) {
    const adminUser  = this.props.adminUser;
const id = adminUser.id
console.log(id)
    const history = this.props.history;
    event.preventDefault();
   const newEmail = (event.target.email.value ? event.target.email.value : adminUser.email)
   const newIsAdmin = (event.target.isAdmin.value === 'Admin' ? true : false);
   {/*const newResetPassword = (event.target.resetPassword.value ? event.target.resetPassword.value: adminUser.resetPassword);*/}

    const updatedAdminUser = {
      email: newEmail,
      isAdmin: newIsAdmin,
      resetPassword: false,
    }
    console.log('user for req', updatedAdminUser)
    this.props.updateUser(id, updatedAdminUser)
    {/*this.props.history.push('/admin/users')*/}

}

 render() {

const user = this.props.adminUser

  return (
    <div>
      <h3>User Details</h3>
      <h2>User Email: {user.email}</h2>
      <h2>User Type: {user.isAdmin ? ' Admin' : ' User'}</h2>
      <h2>Password Reset Needed? {user.resetPassword ? ' Yes' : ' No'}</h2>

            <form id="userform"
            onSubmit={this.submit}>
            <input
              name="email"
              type="text"
              className="form-like"
              placeholder={user.email}
            />
            <p>Prompt the user to reset his or her password below.</p>
            {/*<input type="button" value="resetPassword" onClick={this.resetPW}/>*/}
            <button type="submit" id="submit" >Submit Changes</button>
            </form>
<br/>
<p>Change the user's administrator privileges below.</p>
<select name="isAdmin" form="userform">
  <option value="Admin">Admin</option>
  <option value="User">User</option>
</select>
</div>
    )}

}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    adminUser: state.adminUser,
    users: state.users
  }
}
const mapDispatch =  { getAdminUser, updateUser }

export default connect(mapState, mapDispatch)(AdminEditUserDetail)

//PROP TYPES

// UserHome.propTypes = {
//   email: PropTypes.string
// }
