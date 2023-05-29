import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourseDto } from '../../../../shared/interfaces/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() course!: ICourseDto;

  @Output() onEditCourse = new EventEmitter<ICourseDto>();
  @Output() onDeleteCourse = new EventEmitter<number>();

  public dropdownOpened = false;

  public editCourse(): void {
    this.onEditCourse.emit(this.course);
    this.togglePopover();
  }

  public deleteCourse(): void {
    this.onDeleteCourse.emit(this.course.id);
    this.togglePopover();
  }

  public togglePopover(): void {
    this.dropdownOpened = !this.dropdownOpened;
  }
}
