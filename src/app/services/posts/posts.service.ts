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
    this.http.get(this.url);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.http.post(this.url, post);
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id , JSON.stringify({title: 'TITLE WAS UPDATED'}));
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id);
  }

}
