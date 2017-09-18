import { combineReducers } from 'redux'
import posts_reducer from './posts_reducer'
import comments_reducer from './comments_reducer'
import categories_reducer from './categories_reducer'
import category_reducer from './category_reducer'

export default combineReducers({
  posts: posts_reducer,
  categories: categories_reducer,
  selectCategory: category_reducer
})
