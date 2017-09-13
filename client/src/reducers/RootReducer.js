import { combineReducers } from 'redux'
import PostReducer from './PostReducer'
import CommentReducer from './CommentReducer'

export default rootReducer = combineReducers({
  post: PostReducer,
  comment: CommentReducer
})
