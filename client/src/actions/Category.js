import * as api from '../utils/api'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getCategoriesSuccessfully = categories => 
(
  {
    type: GET_CATEGORIES,
    payload: categories
  }
)
export const getCategories = () => dispatch => {
  api
    .getCategories()
    .then(categories => dispatch(getCategoriesSuccessfully(categories)))
}