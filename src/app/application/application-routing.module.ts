import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { GradesPageComponent } from './grades-page/grades-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: 'grades',
    component: GradesPageComponent,
  },
  {
    path: 'calendar',
    component: CalendarPageComponent,
  },
  {
    path: 'schedule',
    component: SchedulePageComponent,
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'administration',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '*/*',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // bootstrap: [ApplicationPageComponent],
})
export class ApplicationRoutingModule {
}
