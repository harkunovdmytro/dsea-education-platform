import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCourses, selectCoursesForView, selectCurrentUserType } from '../../../store/selectors';
import { BasePageComponent } from '../../components/base-page/base-page.component';
import { ICourseDto } from '../../../shared/interfaces/course.interface';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { ModalsIdentifiers } from '../../../shared/constants/modals-identifiers.constant';
import { createCourse, deleteCourse, editCourse } from 'src/app/store/actions';
import { UserTypes } from '../../../shared/constants/user-types.constant';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPageComponent extends BasePageComponent implements AfterViewInit {
  public readonly userTypes = UserTypes;
  public userType$ = this.store.select(selectCurrentUserType);
  public courses$ = this.store.select(selectCoursesForView);
  public createEditCourseModal!: NgxSmartModalComponent;

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    private store: Store,
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.createEditCourseModal = this.ngxSmartModalService.getModal(ModalsIdentifiers.CreateCourseModalIdentifier);
  }

  public openModal(course?: ICourseDto): void {
    this.createEditCourseModal.setData({
      course,
      isForEdit: !!course,
    }).open();
  }

  public deleteCourse(id: number): void {
    this.store.dispatch(deleteCourse({ id }));
  }

  public editCourse(course: ICourseDto): void {
    this.store.dispatch(editCourse({ course }));
  }

  public createCourse(course: ICourseDto): void {
    this.store.dispatch(createCourse({ course }));
  }
}
