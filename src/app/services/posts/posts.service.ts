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
