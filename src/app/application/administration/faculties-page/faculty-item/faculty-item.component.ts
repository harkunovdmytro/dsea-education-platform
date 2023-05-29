import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFaculty } from '../../../../shared/interfaces/faculty.interface';

@Component({
  selector: 'app-faculty-item',
  templateUrl: './faculty-item.component.html',
  styleUrls: ['./faculty-item.component.scss']
})
export class FacultyItemComponent {
  @Input() faculty!: IFaculty;

  @Output() onEditFaculty = new EventEmitter<IFaculty>();
  @Output() onDeleteFaculty = new EventEmitter<number>();

  public dropdownOpened = false;

  public editFaculty(): void {
    this.onEditFaculty.emit(this.faculty);
    this.togglePopover();
  }

  public deleteFaculty(): void {
    this.onDeleteFaculty.emit(this.faculty.id);
    this.togglePopover();
  }

  public togglePopover(): void {
    this.dropdownOpened = !this.dropdownOpened;
  }
}
