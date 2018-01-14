import axios from 'axios'
import history from '../history'


const GET_PRODUCT_CATEGORIES = 'GET_PRODUCT_CATEGORIES'
const ADD_PRODUCT_CATEGORY = 'ADD_PRODUCT_CATEGORY'
const DELETE_PRODUCT_CATEGORY = 'DELETE_PRODUCT_CATEGORY'


const getProductCategoriesActionCreator = productCats => ({ type: GET_PRODUCT_CATEGORIES, productCats })
const addProductCategoryActionCreator = productCat => ({ type: ADD_PRODUCT_CATEGORY, productCat })
const deleteProductCategoryActionCreator = id => ({ type: DELETE_PRODUCT_CATEGORY, id })


export const getProductCategories = (id) =>
  dispatch =>
    axios.get(`/api/categories/products/${id}`)
      .then(res => res.data)
      .then(result => {
        dispatch(getProductCategoriesActionCreator(result))
      })
      .catch(err => console.log(err))

export const addCategoryToProduct = (id, productCat) =>
  dispatch =>
    axios.get(`/api/categories/${productCat[0].id}/products/${id}`)
      .then(res => res.data)
      .then(result => {
        dispatch(addProductCategoryActionCreator(productCat[0]))
      })
      .catch(err => console.log(err))

export const removeCategoryFromProduct = (id, productCatId) =>
  dispatch => {
    axios.delete(`/api/categories/${productCatId}/products/${id}`)
      .then(res => console.log('res data:', res.data))
      .catch(err => console.error(`Removing category: ${id} unsuccessful`, err));
    dispatch(deleteProductCategoryActionCreator(productCatId))

  }

export default function (productCategories = [], action) {
  switch (action.type) {
    case GET_PRODUCT_CATEGORIES:
      return action.productCats
    case ADD_PRODUCT_CATEGORY:
      return [...productCategories, action.productCat]
    case DELETE_PRODUCT_CATEGORY:
      return productCategories.filter(category => category.id !== action.id)
    default:
      return productCategories
  }
}
