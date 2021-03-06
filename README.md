# 📖 Chapter 9 - Consuming HTTP Services

This project is part of the Angular Series Program, in this episode we present the readjustments of [Angular](https://angular.io) version 7.0.3.

We also present good practices when consuming HTTP services, we also had a brief consideration of the handling of errors for HTTP services (unexpected errors, global errors and specific errors) and to create a reusable service following the Clean Code Guides * Separation of concepts.

# Quick Start 🚀

#### Example: Posts Page

* Clone this repo
<pre>git clone https://github.com/overlineink/http-chapter.git</pre>

* Open this project on your favorite editor or IDE. For this example I was using [vscode](https://code.visualstudio.com/) a powerfull editor.
<pre>code . </pre>

Install dependencies
<pre> npm install </pre>

⚠ Note: Open your command line inside the folder of your project before installing the dependencies
⚠ Advice: Generate your own services and use 'em with DataService class.

Generating `Posts` Service
<pre>ng generate service services/post</pre> or use that for short  <pre>ng g s services/post</pre>

* Extends `DataService` class and passing expected params. 

<pre lang=typescript>
    import { Injectable } from '@angular/core';
    import { Http } from '@angular/http';
    import { DataService } from '../data.service';
    
    @Injectable({
    providedIn: 'root'
    })
    
    export class PostsService extends DataService {
    
        constructor(http : Http) {
            super('https://jsonplaceholder.typicode.com/comments', http);
        }

    }
</pre>

* Generate `Posts` component

<pre>ng g c components/post</pre>

* Consuming our `Posts` service

<pre lang=typescript>
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

        //...

        ngOnInit() {
            this.service.getAll()
            .subscribe(posts => this.posts = posts);
        }

    }

</pre>

* Adding posts to our `Posts` template
In this example I use Bootstrap css classes to make our app friendly.

```
    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">
            {{ post.email }}
        </strong>
        {{ post.body }}
    </p>
```

* Serve your project and enjoy 🐱‍👓

<pre> ng serve --open </pre>