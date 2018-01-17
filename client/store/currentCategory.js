import axios from 'axios'
import history from '../history'


const GET_CATEGORY = 'GET_CATEGORY'

const getCategoryActionCreator = category => ({ type: GET_CATEGORY, category })

export const getCategory = (id) =>
  dispatch =>
    axios.get(`/api/categories/currentCategory/${id}`)
      .then(res => res.data)
      .then(result => {
        dispatch(getCategoryActionCreator(result))
      })
      .catch(err => console.log(err))


export default function (category = {}, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return action.category

    default:
      return category
  }
}
