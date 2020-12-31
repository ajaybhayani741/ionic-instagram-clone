import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Activity } from './activity.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityPage implements OnInit {

  date = new Date().valueOf();

  activities: Activity[] = [
    {
      dateTime: 'Today',
      list: [
        {
          createdAt: this.date,
          description: 'started following you',
          type: 'follow',
          user: 'spiderman',
          postImage: `https://picsum.photos/120?id=2`
        },
        {
          createdAt: this.date,
          description: 'liked your photo',
          type: 'like',
          user: 'thor',
          postImage: `https://picsum.photos/120?id=2`
        }
      ]
    },
    {
      dateTime: 'Yesterday',
      list: [
        {
          createdAt: this.date,
          description: 'started following you',
          type: 'follow',
          user: 'spiderman',
          postImage: `https://picsum.photos/120?id=3`
        },
        {
          createdAt: this.date,
          description: 'liked your photo',
          type: 'like',
          user: 'thor',
          postImage: `https://picsum.photos/120?id=4`
        }
      ]
    },
    {
      dateTime: 'This Week',
      list: [
        {
          createdAt: this.date,
          description: 'started following you',
          type: 'follow',
          user: 'spiderman',
          postImage: `https://picsum.photos/120?id=5`
        },
        {
          createdAt: this.date,
          description: 'liked your photo',
          type: 'like',
          user: 'thor',
          postImage: `https://picsum.photos/120?id=6`
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
