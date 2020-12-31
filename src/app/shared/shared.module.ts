import { NgModule } from '@angular/core';
import { DateAgoPipe } from './pipes/dateAgo.pipe';

@NgModule({
    imports: [],
    exports: [DateAgoPipe],
    declarations: [
        DateAgoPipe
    ],
    providers: [],
})
export class SharedModule { }
