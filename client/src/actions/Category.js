import * as api from '../utils/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const getCategoriesSuccessfully = (categories) => 
(
  {
    type: GET_CATEGORIES,
    categories
  }
);

export const getCategories = () => (dispatch) => {
  api
    .getCategories()
    .then(categories => dispatch(getCategoriesSuccessfully(categories)))
};

export const selectCategory = (category) =>
(
  {
    type: SELECT_CATEGORY,
    category
  }
);

