import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPage implements OnInit {

  groups: Array<{
    hasFeature: boolean;
    items: Array<{
      id: number;
      isFeatured: boolean;
      url: string;
    }>
  }> = [];
  categories = ['Dog', 'Architecture', 'Fashion', 'Watch'];

  constructor() { }

  ngOnInit() {
    this.groups = [
      {
        hasFeature: true,
        items: this.createFeatureGroups(1, 3, [2])
      },
      {
        hasFeature: false,
        items: this.createFeatureGroups(4, 6)
      },
      {
        hasFeature: true,
        items: this.createFeatureGroups(10, 3, [12])
      }, {
        hasFeature: false,
        items: this.createFeatureGroups(13, 6)
      }
    ]

    console.log('this.groups', this.groups);
  }

  createFeatureGroups(start: number, n: number, featuredItems: Array<number> = []) {
    const result = [];

    for (let index = 0; index < n; index++) {
      const id = start + index;
      const isFeatured = featuredItems.length ? featuredItems.includes(id) : false;
      result.push({
        id,
        isFeatured,
        url: `url(https://picsum.photos/360?id=${id})`
      });

    }

    return result;
  }

}
