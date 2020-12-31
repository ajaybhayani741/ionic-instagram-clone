import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/home/post-card/post.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {

  @Input() comment: PostComment;
  @Input() isReply: boolean = false;
  
  constructor() { }

  ngOnInit() {}

  toggleLike() {
    this.comment.liked = !this.comment.liked;
    if (this.comment.liked) {
      this.comment.likes++;
    } else {
      this.comment.likes--;
    }
  }

  likeReply() {

  }

}
