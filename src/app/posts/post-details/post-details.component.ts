import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any;


  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostById(postId);
  }
}