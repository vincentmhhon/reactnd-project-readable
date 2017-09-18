import {
  GET_CATEGORIES,
} from '../actions/Category';

export default function(state = [], action) {
  switch(action.type) {
    case GET_CATEGORIES:
      return [...action.categories ]
    default:
      return state
  }
}