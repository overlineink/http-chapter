import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // public helper to store posts data
  posts;

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(resolve => {
      this.posts = resolve.json();
    });
  }

}
