import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PostListComponent },
      { path: ':id', component: PostDetailsComponent }
    ])
  ],
  providers: [PostService]
})
export class PostsModule { }
