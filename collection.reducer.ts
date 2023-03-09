import { createReducer, on } from '@ngrx/store';
import { PostActions } from './post.action';

export const initialState = [];

export const collectionReducer = createReducer(
    initialState,
    on(PostActions.addPost, (state, action)=> {
     let post = { ...action.post }
     post.id = post.id + 1;
return {
    ...state,
    posts: [ post]
}
    })
)