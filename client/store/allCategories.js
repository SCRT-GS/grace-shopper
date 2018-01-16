import axios from 'axios'
import history from '../history'

const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY'

const getAllProductCategoriesActionCreator = categories => ({ type: GET_PRODUCTS_BY_CATEGORY, categories})

export const getProductsCategory = (id) =>
dispatch =>
  axios.get(`/api/categories/${id}`)
    .then(res => res.data)
    .then(result => {
      dispatch(getAllProductCategoriesActionCreator(result))
    })
    .catch(err => console.log(err))


export default function (categories = [], action) {
  switch (action.type) {
    case GET_PRODUCTS_BY_CATEGORY:
      return action.categories
    default:
      return categories
  }
}
