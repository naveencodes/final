import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostService } from './post.service';
import { PostActions, PostsApiActions } from './state/post.action';
import { selectCollectionState, selectPostCollection, selectPosts } from './state/posts.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts$ = this.store.select(selectPosts);
  postCollection$ = this.store.select(selectCollectionState);

  // onAdd(userId: string) {
  //   this.store.dispatch(PostActions.addPost({ post }));
  // }

  // onRemove(bookId: string) {
  //   this.store.dispatch(PostActions.removePost({ userId }));
  // }

  constructor(private postService: PostService, private store: Store) {}

  ngOnInit() {
    this.postService
      .getPost(1)
      .subscribe((posts) =>
        this.store.dispatch(PostsApiActions.retrievedMyPost({ posts }))
      );
  }
}