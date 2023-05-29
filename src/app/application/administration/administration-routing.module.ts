import { NgModule } from '@angular/core';
import { FacultiesPageComponent } from './faculties-page/faculties-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationPageComponent
  },
  {
    path: 'faculties',
    component: FacultiesPageComponent
  },
  {
    path: 'departments',
    component: DepartmentsPageComponent
  },
  {
    path: 'groups',
    component: GroupsPageComponent
  },
  {
    path: 'users',
    component: UsersPageComponent
  },
  {
    path: '*/*',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule { }
