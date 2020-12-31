import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePostPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
