import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGroupDto } from '../../../../shared/interfaces/group.interface';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss'],
})
export class GroupItemComponent {
  @Input() group!: IGroupDto;

  @Output() onEditGroup = new EventEmitter<IGroupDto>();
  @Output() onDeleteGroup = new EventEmitter<number>();

  public dropdownOpened = false;

  public editGroup(): void {
    this.onEditGroup.emit(this.group);
    this.togglePopover();
  }

  public deleteGroup(): void {
    this.onDeleteGroup.emit(this.group.id);
    this.togglePopover();
  }

  public togglePopover(): void {
    this.dropdownOpened = !this.dropdownOpened;
  }
}
