import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: '',
})
export class BaseComponent implements OnDestroy {

  destroyed$ = new Subject<boolean>();

  constructor() { }

  ngOnInit() { }

  trackByIndex(index: number) {
    return index;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
