import {
  SORT_POSTS,
} from '../actions/Post'


export default function(state = "", action) {
  switch(action.type) {
    case SORT_POSTS:
      return action.sortKey;
    default:
      return state
  }
}