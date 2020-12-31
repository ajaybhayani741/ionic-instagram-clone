import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ITab, Tab } from './tab.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPage extends BaseComponent {

  public tabs: ITab[] = [
    new Tab('home', 'home'),
    new Tab('search', 'search'),
    new Tab('create-post', 'add-circle'),
    new Tab('activity', 'heart'),
    new Tab('profile', 'person')
  ];

  constructor() {
    super();
  }

}
