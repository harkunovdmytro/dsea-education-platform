import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDepartment, IDepartmentDto } from '../../../../shared/interfaces/department.interface';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss'],
})
export class DepartmentItemComponent {
  @Input() department!: IDepartment;

  @Output() onEditDepartment = new EventEmitter<IDepartment>();
  @Output() onDeleteDepartment = new EventEmitter<number>();

  public dropdownOpened = false;

  public editDepartment(): void {
    this.onEditDepartment.emit(this.department);
    this.togglePopover();
  }

  public deleteDepartment(): void {
    this.onDeleteDepartment.emit(this.department.id);
    this.togglePopover();
  }

  public togglePopover(): void {
    this.dropdownOpened = !this.dropdownOpened;
  }
}
