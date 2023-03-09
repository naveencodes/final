import { createActionGroup, props } from '@ngrx/store';
import { Post } from '../post-list/post.model';
 
export const PostActions = createActionGroup({
  source: 'Posts',
  events: {
    'Add Post': props<{ post: Post }>(),
  },
});
 
export const PostsApiActions = createActionGroup({
  source: 'Posts API',
  events: {
    'Retrieved My Post': props<{ posts: ReadonlyArray<Post> }>(),
  },
});