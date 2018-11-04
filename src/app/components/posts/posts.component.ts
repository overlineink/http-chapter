import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // public helper to store posts data
  posts = [];

  constructor(private service: PostsService) { }

  addPost(input : HTMLInputElement) {
    let post = { title: input.value };
    
    input.value = '';
    
    this.service.createPost(post)
      .subscribe(res => {
        post['id'] = res.json().id;
        this.posts.splice(0, 0, post);
      }, err => {
        alert('Unexpected error occurerd.');
        console.log(err);
      });
  }

  removePost(post) {
    this.service.deletePost(post.id)
      .subscribe(res => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, err => {
        alert('Unexpected error occurerd.');
        console.log(err);
      });
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(resolve => {
      this.posts = resolve.json();
    }, err => {
      alert('Unexpected error occurerd.');
      console.log(err);
    });
  }

}
