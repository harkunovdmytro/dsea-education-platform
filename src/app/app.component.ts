import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadData, saveData } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'front-end';

  constructor(private store: Store) {
  }

  public ngOnInit() {
    this.store.dispatch(loadData());

    window.addEventListener('unload', () => this.store.dispatch(saveData()));
  }
}
