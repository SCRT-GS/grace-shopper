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
export {default as ProductDetail} from './ProductDetail'
export {default as AdminUserList} from './AdminUserList'
export {default as AdminEditUserDetail} from './AdminEditUserDetail'
export {default as AdminEditProductDetail} from './AdminEditProductDetail'
export {default as Checkout} from './Checkout'
export { AdminHome} from './AdminHome'

