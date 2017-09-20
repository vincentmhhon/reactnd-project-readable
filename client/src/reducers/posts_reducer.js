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
    case ADD_POST:
      return [...state, action.post];
    case UPDATE_POST:
      return state.map(post =>
         (post.id === {...action.post}.id)?{...action.post}:post
      );
    case DELETE_POST:
      return state.filter(post =>
        (post.id !== {...action.post}.id)
     )
    case VOTE_POST: 
      return state.map(post =>
        (post.id === {...action.post}.id)?{...action.post}:post
      );
    default:
      return state
  }
}