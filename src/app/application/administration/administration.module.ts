import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultiesPageComponent } from './faculties-page/faculties-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CreateEditFacultyModalComponent } from './faculties-page/create-edit-faculty-modal/create-edit-faculty-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalComponent, NgxSmartModalModule } from 'ngx-smart-modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FacultyItemComponent } from './faculties-page/faculty-item/faculty-item.component';
import { CreateEditDepartmentModalComponent } from './departments-page/create-edit-department-modal/create-edit-department-modal.component';
import { DepartmentItemComponent } from './departments-page/department-item/department-item.component';
import { CreateEditGroupModalComponent } from './groups-page/create-edit-group-modal/create-edit-group-modal.component';
import { GroupItemComponent } from './groups-page/group-item/group-item.component';
import { CreateEditUserModalComponent } from './users-page/create-edit-user-modal/create-edit-user-modal.component';
import { UserItemComponent } from './users-page/user-item/user-item.component';



@NgModule({
  declarations: [
    FacultiesPageComponent,
    GroupsPageComponent,
    DepartmentsPageComponent,
    UsersPageComponent,
    AdministrationPageComponent,
    CreateEditFacultyModalComponent,
    FacultyItemComponent,
    CreateEditDepartmentModalComponent,
    DepartmentItemComponent,
    CreateEditGroupModalComponent,
    GroupItemComponent,
    CreateEditUserModalComponent,
    UserItemComponent,
    // NgxSmartModalComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    FormsModule,
    NgxSmartModalModule,
    PopoverModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreateEditFacultyModalComponent,
  ],
  bootstrap: [AdministrationPageComponent],
})
export class AdministrationModule { }
