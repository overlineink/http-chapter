import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  // private API url
  private url = 'https://jsonplaceholder.typicode.com/posts';
  posts;

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id , JSON.stringify({title: 'TITLE WAS UPDATED'}));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
