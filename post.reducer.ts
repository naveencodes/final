import { state } from '@angular/animations';
import { createAction, createReducer, on } from '@ngrx/store';

import { Post } from '../post-list/post.model';
import { PostActions, PostsApiActions } from './post.action';

export const initialState: ReadonlyArray<Post> = [];
// export const collectionReducer = createReducer(
//     initialState,
//     on(PostActions.addPost, (state, { post }) => {
//       return [...state, post.id];
//     })
//   );
// export const createPostReducer =  createReducer(
//     initialState,
//     on(PostActions.addPost, (state, action)=> {
//      let post = {...action.post};
// return {
//     ...state,
//     post: [...state, post]
// }
//     })
// )
export const pootsReducer = createReducer(
  initialState,
  on(PostsApiActions.retrievedMyPost, (_state, { posts }) => posts)
);
