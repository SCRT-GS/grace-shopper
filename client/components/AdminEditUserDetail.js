import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router'
import store, { getAdminUser } from '../store'
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
  }

  componentDidMount(){
    const userId = Number(this.props.match.params.userId)
    const adminUserThunk = getAdminUser(userId)
    store.dispatch(adminUserThunk);

  }
 render(){
const user = this.props.adminUser
console.log(this.props)
  return (
    <div>
      <h3>Welcome to the Admin's Detail Page!</h3>

            <h3 id="product-prof">{user.email}</h3>
            </div>
    )}

}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    adminUser: state.adminUser
  }
}
const mapDispatch =  { getAdminUser }

export default connect(mapState, mapDispatch)(AdminEditUserDetail)

//PROP TYPES

// UserHome.propTypes = {
//   email: PropTypes.string
// }
