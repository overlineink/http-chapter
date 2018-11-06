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
    let post = { email: 'me@example.com', body: input.value };
    this.posts.splice(0, 0, post);
    
    input.value = '';
    
    this.service.create(post)
      .subscribe(post => {
        post['id'] = post.id;
      }, (err : AppError) => {
        this.posts.splice(0, 1);
        
        if(err instanceof BadInput)
          alert('');
        else throw err;
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(post => console.log(post));
  }

  removePost(post) {
    this.service.delete(post.id)
      .subscribe(() => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (err : AppError) => {
        if(err instanceof NotFoundError)
          alert('This post has already been deleted.');
        else throw err;
      });
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

}
