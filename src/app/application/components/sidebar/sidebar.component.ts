import { Component } from '@angular/core';
import { SIDEBAR_ROUTES } from '../../../shared/constants/routes.constant';
import { Store } from '@ngrx/store';
import { selectCurrentUserType } from '../../../store/selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public currentUserType$ = this.store.select(selectCurrentUserType);
  public menuItems = SIDEBAR_ROUTES;

  constructor(private store: Store) {
  }
  public toggleSubMenu(index: number): void {
    this.menuItems[index].subPagesVisible = !this.menuItems[index].subPagesVisible;
  }
}
