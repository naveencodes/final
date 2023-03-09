import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post-list/post.model';

@Component({
  selector: 'app-post-collection',
  templateUrl: './post-collection.component.html',
  styleUrls: ['./post-collection.component.scss']
})
export class PostCollectionComponent {
  @Input() collection: any;
}
