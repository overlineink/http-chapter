import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { AppError } from 'src/app/common/app.error';
import { NotFoundError } from 'src/app/common/not-found.error';
import { BadInput } from 'src/app/common/bad.input';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  // private API url
  private url = 'https://jsonplaceholder.typicode.com/posts';
  posts;

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id , JSON.stringify({title: 'TITLE WAS UPDATED'}))
    .pipe(
      catchError(this.errorHandler)
    );
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(err : Response) {
    
    if(err.status === 400)
      return throwError(new BadInput(err.json()));
    
      if(err.status === 404)
      return throwError(new NotFoundError(err));

    return throwError(new AppError(err));
  }

}
