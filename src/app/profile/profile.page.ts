import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UtilService } from '../shared/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage implements OnInit {

  posts: Array<{
    id: number;
    url: string;
  }> = [];

  constructor() {
    this.posts = UtilService.createMockImages(17);
  }

  ngOnInit() {
  }

}
