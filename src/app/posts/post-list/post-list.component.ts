import { Component } from '@angular/core';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
