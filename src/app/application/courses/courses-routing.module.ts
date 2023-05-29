import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseDetailsPageComponent } from './course-details-page/course-details-page.component';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
  }, {
    path: ':courseId',
    component: CourseDetailsPageComponent,
  }, {
    path: 'test',
    component: TestPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {
}
