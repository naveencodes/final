import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from '../post-list/post.model';
import { PostActions } from '../state/post.action';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {
  postForm!: FormGroup;
  formValid:boolean = false;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl(null, [Validators.required,Validators.minLength(10)])
    })
  }
  showDescriptionErrors(): string | undefined | void{
    const descriptionForm = this.postForm.get('description');
    if(descriptionForm?.touched && !descriptionForm.valid){
        return 'Description is required with minmum 10 charecter';
    }
  }
  showtitleErrors(): string | undefined | void{
    const titleForm = this.postForm.get('title');
    if(titleForm?.touched && !titleForm.valid){
        return 'title is required with minimum 6 charecter';
    }
  }
  addPost() {
    let randomid = Math.floor(Math.random() * 20)
    if(this.postForm.valid){
      console.log(this.postForm);
    }
    const post: Post =  {
      id: randomid,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    }
    this.store.dispatch(PostActions.addPost({post}));
  }
  get title() { return this.postForm.get('title'); }

}
