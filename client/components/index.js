/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as ProductList} from './ProductList'
export {default as AdminProductList} from './AdminProductList'
export {default as AdminCategoryList} from './AdminCategoryList'
export {default as ProductDetail} from './ProductDetail'
export {default as MyOrderDetail} from './MyOrderDetail'
export {default as AdminUserList} from './AdminUserList'
export {default as AdminOrderList} from './AdminOrderList'
export {default as AdminEditUserDetail} from './AdminEditUserDetail'
export {default as AdminEditOrderDetail} from './AdminEditOrderDetail'
export {default as Cart} from './Cart'
export {default as AdminEditProductDetail} from './AdminEditProductDetail'
export {default as Checkout} from './Checkout'
export {default as ReviewForm} from './ReviewForm'
export {default as ReviewList} from './ReviewList'
export {default as ReviewDetail} from './ReviewDetail'
export {default as ResetPassword} from './ResetPassword'
export { AdminHome} from './AdminHome'
export {default as MyOrders} from './MyOrders'
export { OrderSubmitted } from './OrderSubmitted'
export {default as SideBar } from './SideBar'
export {default as Category} from './Category'
export { LandingPage } from './LandingPage'

//will be exporting the centsToDollarString function from here
