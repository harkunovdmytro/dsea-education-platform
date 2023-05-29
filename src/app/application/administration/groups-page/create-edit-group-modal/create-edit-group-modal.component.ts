import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { BaseModalComponent } from '../../../../shared/components/base-modal/base-modal.component';
import { combineLatest, map, Observable } from 'rxjs';
import { IFaculty } from '../../../../shared/interfaces/faculty.interface';
import { IDepartmentDto } from '../../../../shared/interfaces/department.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ModalsIdentifiers } from '../../../../shared/constants/modals-identifiers.constant';
import { IGroupDto } from '../../../../shared/interfaces/group.interface';
import { Store } from '@ngrx/store';
import { selectDepartments, selectFaculties } from '../../../../store/selectors';

@Component({
  selector: 'app-create-edit-group-modal',
  templateUrl: './create-edit-group-modal.component.html',
  styleUrls: ['./create-edit-group-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEditGroupModalComponent extends BaseModalComponent {
  @Output() onSubmitCreate = new EventEmitter<IGroupDto>();
  @Output() onSubmitEdit = new EventEmitter<IGroupDto>();

  public isForEdit = false;
  public groupForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    shortName: new FormControl('', [Validators.required]),
    facultyId: new FormControl<number | null>(null, [Validators.required]),
    departmentId: new FormControl<number | null>({
      value: null,
      disabled: true,
    }, [Validators.required]),
    creationDate: new FormControl<string>(''),
    closingDate: new FormControl<string>(''),
  });
  public faculties$: Observable<IFaculty[]> = this.store.select(selectFaculties);
  public departments$: Observable<IDepartmentDto[]> = combineLatest(
    this.store.select(selectDepartments),
    this.groupForm.controls.facultyId.valueChanges,
  ).pipe(map(([departments, facultyId]) => {
      if (facultyId === null) return [];
      return departments?.filter(d => d.facultyId === +facultyId);
    }),
  );

  constructor(
    private store: Store,
    protected override ngxSmartModalService: NgxSmartModalService,
  ) {
    super(ngxSmartModalService);
    this.identifier = ModalsIdentifiers.CreateGroupModalIdentifier;
  }

  public handleAddedDataModal(data: { group: IGroupDto, isForEdit: boolean }): void {
    this.isForEdit = data.isForEdit;

    if (data.isForEdit && data.group) {
      this.groupForm.controls.departmentId.enable();

      const group: IGroupDto = {
        id: data.group.id,
        name: data.group.name,
        shortName: data.group.shortName,
        facultyId: data.group.facultyId,
        departmentId: data.group.departmentId,
        creationDate: 'string',
        closingDate: 'string',
      };

      this.groupForm.setValue(group);
    }
  }

  public handleCloseModal(): void {
    this.groupForm.reset();
  }

  public submitForm(): void {
    if(this.groupForm.invalid) return ;
    const facultyId = +(this.groupForm!.controls!.facultyId!.value || 0) as number;
    const departmentId = +(this.groupForm!.controls!.departmentId!.value || 0) as number;

    const groupDto: IGroupDto = {
      name: this.groupForm.value.name || '',
      shortName: this.groupForm.value.shortName || '',
      id: this.groupForm.value.id,
      creationDate: new Date().getTime().toString(),
      closingDate: new Date().getTime().toString(),
      facultyId,
      departmentId,
    };

    this.isForEdit
      ? this.onSubmitEdit.emit(groupDto)
      : this.onSubmitCreate.emit(groupDto);

    this.modalInstance.close();
  }
}
