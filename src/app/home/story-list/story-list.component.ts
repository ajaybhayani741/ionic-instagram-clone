import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryListComponent extends BaseComponent implements OnInit {

  getStoryThumbnail (id: number) {
    return `https://picsum.photos/120/120?id=${id}`;
  }

  public stories = [
    {
      id: 1,
      img: this.getStoryThumbnail(1),
      user_name: 'candelibas'
    },
    {
      id: 2,
      img: this.getStoryThumbnail(2),
      user_name: 'maxlynch'
    },
    {
      id: 3,
      img: this.getStoryThumbnail(3),
      user_name: 'ashleyosama'
    },
    {
      id: 4,
      img: this.getStoryThumbnail(4),
      user_name: 'adam_bradley'
    },
    {
      id: 5,
      img: this.getStoryThumbnail(5),
      user_name: 'linus_torvalds'
    }
    
  ];

  constructor() {
    super();
   }

  ngOnInit() {}

}
