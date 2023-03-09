import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Post } from '../post-list/post.model';

export const selectPosts = createFeatureSelector<Array<Post>>('posts');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectPostCollection = createSelector(
    selectPosts,
  selectCollectionState,
  (posts, collection) => {
    return collection;
  }
);