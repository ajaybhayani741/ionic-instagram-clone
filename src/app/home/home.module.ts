import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { StoryListComponent } from './story-list/story-list.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [
    StoryListComponent,
    PostCardComponent,
    HomePage
  ],
  providers: [
  ]
})
export class HomePageModule {}
