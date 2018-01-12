import axios from 'axios'
import history from '../history'


const GET_PRODUCTS = 'GET_PRODUCTS'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'

const getProductsActionCreator = products => ({ type: GET_PRODUCTS, products })
const updateProductActionCreator = product => ({ type: UPDATE_PRODUCT, product })
const addProductActionCreator = product => ({ type: ADD_PRODUCT, product })



// export const getProducts = () =>
//   async (dispatch) =>
//     try {
//       const res = await axios.get('/api/products/')
//       const result  = await res.data
//       dispatch(getProductsActionCreator(result))
//     }
//     catch (error) {
// handle error
// }
export const getProducts = () =>
  dispatch =>
    axios.get('/api/products/')
      .then(res => res.data)
      .then(result => {
        dispatch(getProductsActionCreator(result))
      })
      .catch(err => console.log(err))

export const updateProduct = (id, product) => dispatch => {
  axios.put(`/api/products/update/${id}`, product)
    .then(res => dispatch(updateProductActionCreator(res.data)))
    .catch(err => console.error(`Could not update Product:`, err));
}
export const addProduct = (product) => dispatch => {
  axios.post(`/api/products/`, product)
    .then(res => dispatch(addProductActionCreator(res.data)))
    .catch(err => console.error(`Could not add Product:`, err));
}


export default function (products = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    case UPDATE_PRODUCT:
      return products.map(product => (action.product.id === product.id ? action.product : product))
    case ADD_PRODUCT:
      return [...products, action.product]
    default:
      return products
  }
}
