import {
  GET_POST,
  VOTE_POST,
  ADD_POST,
  UPDATE_POST,
  SET_POST,
} from '../actions/Post'


export default function(state = {}, action) {
  switch(action.type) {
    case GET_POST:
      return {...action.post};
    case VOTE_POST:
      return {...action.post};
    case ADD_POST:
      return {...action.post};
    case UPDATE_POST:
      return {...action.post};
    case SET_POST:
      return {...action.post};
    default:
      return state
  }
}