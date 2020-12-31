import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { BaseComponent } from '../base/base.component';
import { Post } from './post-card/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage extends BaseComponent implements OnInit {

  posts$ = new BehaviorSubject<Post[]>([]);
  pagination: {
    page: number,
    limit: number,
    total: number
  } = {
      page: 1,
      limit: 2,
      total: 0
    };

  constructor(
    private api: ApiService
  ) {
    super();
    this.fetchNewPosts();
  }

  ngOnInit() {
  }

  fetchNewPosts(event: any = null) {
    const { page, limit } = this.pagination;
    this.api.fetchFeeds(page, limit).subscribe(
      (response) => {
        const newPosts = response.data.map((result, index) => ({
          id: result.id,
          username: `${result.first_name} ${result.last_name}`,
          avatar: result.avatar,
          imageUrl: `https://picsum.photos/600?d=${new Date().valueOf()}-${index}`,
          caption: 'lorem ipsum, lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
          location: 'Surat',
          liked: true,
          saved: true,
          likes: 100,
          createdAt: new Date().valueOf(),
          comments: [
            {
              user: `${result.first_name} ${result.last_name}`,
              text: 'lorem ipsum comment',
              avatar: `https://picsum.photos/60?id=${index}`,
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
                  user: 'spiderman',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
                  avatar: `https://picsum.photos/60?id=${index}`,
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
                  avatar: `https://picsum.photos/60?id=${index}`,
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
          ]
        }));

        if (page === 1) {
          this.pagination = {
            ...this.pagination,
            total: response.total
          }
        }

        if (page === response.total_pages) {
          event.target.disabled = true;
        }

        if (event) {
          event.target.complete();
        }

        const updatedPosts = this.posts$.value.concat(newPosts);
        this.posts$.next(updatedPosts);
      }
    )
  }

  onSwipe($event) {
    // console.log('$event', typeof $event);
  }

  loadData($event: object) {
    const currentPagination = {
      ...this.pagination
    };
    this.pagination = {
      ...currentPagination,
      page: (currentPagination.page + 1)
    };
    this.fetchNewPosts($event);
  }

  trackById(index: number, item: Post) {
    return item.id;
  }

}
