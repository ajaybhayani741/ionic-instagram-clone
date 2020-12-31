import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { Activity } from '../activity.model';

@Component({
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ActivityListComponent extends BaseComponent implements OnInit {

    @Input() activities: Activity[];
    constructor() {
        super();
     }

    ngOnInit() { }
}