import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserDto } from '../../../shared/interfaces/user.interface';
import { selectAdmins, selectTeachers, selectUsers, selectUsersForView } from '../../../store/selectors';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { Store } from '@ngrx/store';
import { ModalsIdentifiers } from '../../../shared/constants/modals-identifiers.constant';
import { BasePageComponent } from '../../components/base-page/base-page.component';
import { createUser, deleteUser, editUser } from 'src/app/store/actions';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent extends BasePageComponent implements AfterViewInit {
  public users$: Observable<IUserDto[]> = this.store.select(selectUsers);
  public teachers$: Observable<IUserDto[]> = this.store.select(selectTeachers);
  public admins$: Observable<IUserDto[]> = this.store.select(selectAdmins);
  public usersForView$ = this.store.select(selectUsersForView);
  public createEditUserModal!: NgxSmartModalComponent;

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    private store: Store,
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.createEditUserModal = this.ngxSmartModalService.getModal(ModalsIdentifiers.CreateUserModalIdentifier);
  }

  public openModal(user?: IUserDto): void {
    this.createEditUserModal.setData({
      user,
      isForEdit: !!user,
    }).open();
  }

  public deleteUser(uuid: number): void {
    this.store.dispatch(deleteUser({ uuid }));
  }

  public editUser(user: IUserDto): void {
    this.store.dispatch(editUser({ user }));
  }

  public createUser(user: IUserDto): void {
    this.store.dispatch(createUser({ user }));
  }
}
