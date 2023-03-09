import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post-list/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 public apiUrl='https://jsonplaceholder.typicode.com/posts'
 public userId = 1;
  constructor(private http: HttpClient) { }
  getPost(userId: number): Observable<Array<Post>> {
    
    return this.http.get<any>(this.apiUrl).pipe(
      map(result => {
        return result.filter((item: { userId: number; }) => { 
            return item.userId == userId;
        })
    }),
    )
  }
  // displayError(error: any): any {

  //   alert( 'API Error' );
  // }

  // getPosts(): Observable<Array<Post>> {
  //   return this.http.get<{ items: Post[] }>(
  //       'https://jsonplaceholder.typicode.com/posts'
  //     ).pipe(map((posts) => posts.items || []));
  // }
}
