import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserDto } from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent {
  @Input() user!: IUserDto;

  @Output() onEditUser = new EventEmitter<IUserDto>();
  @Output() onDeleteUser = new EventEmitter<number>();

  public dropdownOpened = false;

  public editUser(): void {
    this.onEditUser.emit(this.user);
    this.togglePopover();
  }

  public deleteUser(): void {
    this.onDeleteUser.emit(this.user.uuid);
    this.togglePopover();
  }

  public togglePopover(): void {
    this.dropdownOpened = !this.dropdownOpened;
  }
}
