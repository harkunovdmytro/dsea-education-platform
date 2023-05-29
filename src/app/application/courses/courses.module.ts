import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseDetailsPageComponent } from './course-details-page/course-details-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CourseItemComponent } from './courses-page/course-item/course-item.component';
import { CreateEditCourseModalComponent } from './courses-page/create-edit-course-modal/create-edit-course-modal.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseDetailsPageComponent,
    TestPageComponent,
    CourseItemComponent,
    CreateEditCourseModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoursesRoutingModule,
    SharedModule,
    NgxSmartModalModule,
  ],
  bootstrap: [CoursesPageComponent]
})
export class CoursesModule { }
