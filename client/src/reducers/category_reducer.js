import {
  SELECT_CATEGORY,
} from '../actions/Category';

export default function(state = 'All', action) {
  switch(action.type) {
    case SELECT_CATEGORY:
      return action.category;
    default:
      return state
  }
};