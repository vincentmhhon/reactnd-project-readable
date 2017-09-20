import {
  GET_POST_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT,
} from '../actions/Comment'

export default function(state = [], action) {
  switch(action.type) {
    case GET_POST_COMMENTS:
      return [...action.comments ];
    case ADD_COMMENT:
      return [...state, action.comment];
    case UPDATE_COMMENT:
      return state.map(comment =>
         (comment.id === {...action.comment}.id)?{...action.comment}:comment
      );
    case DELETE_COMMENT:
      return state.filter(comment =>
        (comment.id !== {...action.comment}.id)
      );
    case VOTE_COMMENT: 
      return state.map(comment =>
        (comment.id === {...action.comment}.id)?{...action.comment}:comment
      );
    default:
      return state
  }
}