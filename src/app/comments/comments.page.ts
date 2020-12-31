import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsPage extends BaseComponent implements OnInit {

  @ViewChild('content') private content: IonContent;
  userAvatar = 'https://picsum.photos/120';
  commentText = '';
  comments = [
    {
      user: `spiderman`,
      text: 'lorem ipsum comment',
      avatar: `https://picsum.photos/60?id=1`,
      likes: 5,
      liked: false,
      createdAt: new Date().valueOf(),
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ],
      replies: [
        {
          user: 'hawkeye',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
          avatar: `https://picsum.photos/60?id=2`,
          likes: 0,
          liked: false,
          createdAt: new Date().valueOf(),
          tags: [
            'tag4',
            'tag5',
            'tag6'
          ],
          replies: []
        },
        {
          user: 'superman',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
          avatar: `https://picsum.photos/60?id=3`,
          likes: 0,
          liked: false,
          createdAt: new Date().valueOf(),
          tags: [
            'tag4',
            'tag5',
            'tag6'
          ],
          replies: []
        }
      ]
    },
    {
      user: `ironman`,
      text: 'lorem ipsum comment',
      avatar: `https://picsum.photos/60?id=1`,
      likes: 5,
      liked: false,
      createdAt: new Date().valueOf(),
      tags: [
        'tag1',
        'tag2',
        'tag3'
      ],
      replies: [
        {
          user: 'thor',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
          avatar: `https://picsum.photos/60?id=2`,
          likes: 0,
          liked: false,
          createdAt: new Date().valueOf(),
          tags: [
            'tag4',
            'tag5',
            'tag6'
          ],
          replies: []
        },
        {
          user: 'panther',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
          avatar: `https://picsum.photos/60?id=3`,
          likes: 0,
          liked: false,
          createdAt: new Date().valueOf(),
          tags: [
            'tag4',
            'tag5',
            'tag6'
          ],
          replies: []
        }
      ]
    }
  ];

  constructor() {
    super();
  }

  ngOnInit() {
  }

  clearCommentBox() {
    this.commentText = '';
  }

  async addComment() {
    const trimmedTextComment = this.commentText.trim();
    if (!trimmedTextComment) {
      this.clearCommentBox();
      return false;
    }

    this.comments.push({
      user: `vimal`,
      text: this.commentText,
      avatar: `https://picsum.photos/60?id=${new Date().valueOf()}`,
      likes: 0,
      liked: false,
      createdAt: new Date().valueOf(),
      tags: [],
      replies: []
    });
    this.clearCommentBox();
    await this.content.scrollToBottom(0);
  }

}
