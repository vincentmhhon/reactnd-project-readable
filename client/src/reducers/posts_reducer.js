import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  VOTE_POST,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST,
} from '../actions/Post'


export default function(state = [], action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      return [...action.posts ];
      case GET_CATEGORY_POSTS:
      return [...action.posts ];
    default:
      return state
  }
}