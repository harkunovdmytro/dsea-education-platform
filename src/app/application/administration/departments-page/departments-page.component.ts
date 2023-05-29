import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { IDepartment, IDepartmentDto } from '../../../shared/interfaces/department.interface';
import { Observable } from 'rxjs';
import { selectDepartmentsForView, selectFaculties } from '../../../store/selectors';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { Store } from '@ngrx/store';
import { ModalsIdentifiers } from '../../../shared/constants/modals-identifiers.constant';
import { BasePageComponent } from '../../components/base-page/base-page.component';
import { createDepartment, deleteDepartment, editDepartment } from '../../../store/actions';
import { IFaculty } from '../../../shared/interfaces/faculty.interface';

@Component({
  selector: 'app-departments-page',
  templateUrl: './departments-page.component.html',
  styleUrls: ['./departments-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentsPageComponent extends BasePageComponent implements AfterViewInit {
  public faculties$: Observable<IFaculty[]> = this.store.select(selectFaculties);
  public facultiesForView$: Observable<{
    faculty: IFaculty,
    departments: IDepartment[]
  }[]> = this.store.select(selectDepartmentsForView);
  public createEditDepartmentModal!: NgxSmartModalComponent;

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    private store: Store,
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.createEditDepartmentModal = this.ngxSmartModalService.getModal(ModalsIdentifiers.CreateDepartmentModalIdentifier);
  }

  public openModal(department?: IDepartment): void {
    this.createEditDepartmentModal.setData({
      department,
      isForEdit: !!department,
    }).open();
  }

  public deleteDepartment(id: number): void {
    this.store.dispatch(deleteDepartment({ id }));
  }

  public editDepartment(department: IDepartmentDto): void {
    this.store.dispatch(editDepartment({ department }));
  }

  public createDepartment(department: IDepartmentDto): void {
    this.store.dispatch(createDepartment({ department }));
  }
}
