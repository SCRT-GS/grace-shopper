import axios from 'axios'
import history from '../history'


const GET_CATEGORIES = 'GET_CATEGORIES'
const ADD_CATEGORY = 'ADD_CATEGORY'
const DELETE_CATEGORY = 'DELETE_CATEGORY'

const getCategoriesActionCreator = categories => ({ type: GET_CATEGORIES, categories })
const deleteCategoryActionCreator = id => ({ type: DELETE_CATEGORY, id})
const addCategoryActionCreator = category => ({ type: ADD_CATEGORY, category })

export const getCategories = () =>
  dispatch =>
    axios.get('/api/categories/')
      .then(res => res.data)
      .then(result => {
        dispatch(getCategoriesActionCreator(result))
      })
      .catch(err => console.log(err))

export const deleteCategory = (id) => dispatch => {
  axios.delete(`/api/categories/${id}`)
  .then(res => console.log('res data:', res.data))
  .catch(err => console.error(`Removing category: ${id} unsuccessful`, err));
  dispatch(deleteCategoryActionCreator(id));
}

export const addCategory = (category) => dispatch => {
  axios.post(`/api/categories/`, category)
    .then(res => dispatch(addCategoryActionCreator(res.data)))
    .catch(err => console.error(`Could not add category:`, err));
}


export default function (categories = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories
    case DELETE_CATEGORY:
      return categories.filter(category => category.id !== action.id)
    case ADD_CATEGORY:
      return [...categories, action.category]
    default:
      return categories
  }
}
