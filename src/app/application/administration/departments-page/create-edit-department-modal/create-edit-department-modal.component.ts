import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ModalsIdentifiers } from '../../../../shared/constants/modals-identifiers.constant';
import { BaseModalComponent } from '../../../../shared/components/base-modal/base-modal.component';
import { IDepartment, IDepartmentDto } from '../../../../shared/interfaces/department.interface';
import { Observable } from 'rxjs';
import { IFaculty } from '../../../../shared/interfaces/faculty.interface';

@Component({
  selector: 'app-create-edit-department-modal',
  templateUrl: './create-edit-department-modal.component.html',
  styleUrls: ['./create-edit-department-modal.component.scss'],
})
export class CreateEditDepartmentModalComponent extends BaseModalComponent {
  @Input() faculties$!: Observable<IFaculty[]>;

  @Output() onSubmitCreate = new EventEmitter<IDepartmentDto>();
  @Output() onSubmitEdit = new EventEmitter<IDepartmentDto>();

  public isForEdit = false;
  public departmentForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    shortName: new FormControl('', [Validators.required]),
    facultyId: new FormControl<number | null>(null, [Validators.required]),
  });

  constructor(
    protected override ngxSmartModalService: NgxSmartModalService,
  ) {
    super(ngxSmartModalService);
    this.identifier = ModalsIdentifiers.CreateDepartmentModalIdentifier;
  }

  public handleAddedDataModal(data: { department: IDepartment, isForEdit: boolean }): void {
    this.isForEdit = data.isForEdit;

    if (data.isForEdit && data.department) {
      const department: IDepartmentDto = {
        id: data.department.id,
        name: data.department.name,
        shortName: data.department.shortName,
        facultyId: data.department.faculty.id,
      };

      this.departmentForm.setValue(department);
    }
  }

  public handleCloseModal(): void {
    this.departmentForm.reset();
  }

  public submitFaculty(): void {
    const facultyId = +(this.departmentForm!.controls!.facultyId!.value || 0) as number;

    const departmentDto = {
      name: this.departmentForm.value.name || '',
      shortName: this.departmentForm.value.shortName || '',
      facultyId,
      id: this.departmentForm.value.id,
    } as IDepartmentDto;

    this.isForEdit
      ? this.onSubmitEdit.emit(departmentDto)
      : this.onSubmitCreate.emit(departmentDto);
  }
}
