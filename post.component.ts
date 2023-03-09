import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post-list/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() posts: ReadonlyArray<Post> = [];
  @Output() add = new EventEmitter<string>();
}
