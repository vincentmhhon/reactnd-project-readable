import {
  GET_COMMENT,
  VOTE_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT,
  SET_COMMENT,
} from '../actions/Comment'


export default function(state = {}, action) {
  switch(action.type) {
    case GET_COMMENT:
      return {...action.comment};
    case VOTE_COMMENT:
      return {...action.comment};
    case ADD_COMMENT:
      return {...action.comment};
    case UPDATE_COMMENT:
      return {...action.comment};
    case SET_COMMENT:
      return {...action.comment};
    default:
      return state
  }
}