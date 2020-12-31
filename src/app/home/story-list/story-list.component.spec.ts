import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoryListComponent } from './story-list.component';

describe('StoryListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
