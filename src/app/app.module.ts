import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsService } from './services/posts/posts.service';
import { PostsComponent } from './components/posts/posts.component';
import { HttpModule } from '@angular/http';
import { AppErrorHadler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHadler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
