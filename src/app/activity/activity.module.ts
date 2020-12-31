import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageRoutingModule } from './activity-routing.module';

import { ActivityPage } from './activity.page';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ActivityPageRoutingModule
  ],
  declarations: [
    ActivityListComponent,
    ActivityPage
  ]
})
export class ActivityPageModule {}
