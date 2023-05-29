import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUserType, selectUsername } from '../../../store/selectors';
import { map } from 'rxjs';
import { UserTypes } from '../../../shared/constants/user-types.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public userName$ = this.store.select(selectUsername);
  public userType$ = this.store.select(selectCurrentUserType).pipe(map(type => UserTypes[type as number]));
  constructor(private store: Store) {
  }
}
