import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  VOTE_POST,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST,
  SORT_POSTS,
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
      );
    case VOTE_POST: 
      return state.map(post =>
        (post.id === {...action.post}.id)?{...action.post}:post
      );
    case SORT_POSTS:
      return [...state].sort((a, b) => {
        if (action.sortKey === "") 
          return state;

        var x= a[action.sortKey];
        var y = b[action.sortKey];
        return ( (x > y) ? -1 : ((x < y) ? 1 : 0 ) );
      }); 
    default:
      return state
  }
}