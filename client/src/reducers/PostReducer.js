import {
  GET_ALL_POSTS,
  GET_POST,
  VOTE_POST,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST,
} from '../actions/Post'

const INITIAL_STATE = {
  posts: [],
  currentPost: null,
  newPost: null,
  deletedPost: null
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      return {...state, posts: action.payload }
    case GET_POST:
      return {...state, currentPost: action.payload }
    case DELETE_POST:
      return {...state, deletedPost: action.payload }
    case ADD_POST:
      return {...state, newPost: action.payload }
    case UPDATE_POST:
      return {...state, currentPost: action.payload }
  }
}