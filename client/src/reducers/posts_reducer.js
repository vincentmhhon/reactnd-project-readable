import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  GET_POST,
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
    case GET_POST:
      return {...state, currentPost: action.posts }
    case DELETE_POST:
      return {...state, posts: action.post }
    case ADD_POST:
      return {...state, newPost: action.payload }
    case UPDATE_POST:
      return {...state, currentPost: action.payload }
    default:
      return state
  }
}