import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { AppError } from 'src/app/common/app.error';
import { NotFoundError } from 'src/app/common/not-found.error';
import { BadInput } from 'src/app/common/bad.input';

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
      }, (err : AppError) => {
        if(err instanceof BadInput)
          alert('');
        else throw err;
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(res => {
        console.log(res.json());
      });
  }

  removePost(post) {
    this.service.deletePost(post.id)
      .subscribe(res => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (err : AppError) => {
        if(err instanceof NotFoundError)
          alert('This post has already been deleted.');
        else throw err;
      });
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(resolve => {
      this.posts = resolve.json();
    });
  }

}
