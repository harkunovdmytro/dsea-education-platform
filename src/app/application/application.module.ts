import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { GradesPageComponent } from './grades-page/grades-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { BasePageComponent } from './components/base-page/base-page.component';
// import { ApplicationPageComponent } from './application-page/application-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ProfilePageComponent,
    GradesPageComponent,
    CalendarPageComponent,
    SchedulePageComponent,
    SettingsPageComponent,
    BasePageComponent,
    // ApplicationPageComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
  ],
  // bootstrap: [ApplicationPageComponent],
})
export class ApplicationModule {
}
