import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { BaseModalComponent } from '../../../../shared/components/base-modal/base-modal.component';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, map, Observable } from 'rxjs';
import { IFaculty } from '../../../../shared/interfaces/faculty.interface';
import { selectDepartments, selectFaculties, selectGroups } from '../../../../store/selectors';
import { IDepartmentDto } from '../../../../shared/interfaces/department.interface';
import { Store } from '@ngrx/store';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ModalsIdentifiers } from '../../../../shared/constants/modals-identifiers.constant';
import { IUserDto } from '../../../../shared/interfaces/user.interface';
import { UserTypes } from '../../../../shared/constants/user-types.constant';

@Component({
  selector: 'app-create-edit-user-modal',
  templateUrl: './create-edit-user-modal.component.html',
  styleUrls: ['./create-edit-user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEditUserModalComponent extends BaseModalComponent {
  @Output() onSubmitCreate = new EventEmitter<IUserDto>();
  @Output() onSubmitEdit = new EventEmitter<IUserDto>();

  public isForEdit = false;
  public userTypes = UserTypes;
  public userForm = new FormGroup({
    uuid: new FormControl<number | null>(null),
    userType: new FormControl<number | null>(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    fathersName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    coursesIds: new FormArray<any>([]),
    facultyId: new FormControl<number | null>(null),
    departmentId: new FormControl<number | null>({value:null, disabled: true}),
    groupId: new FormControl<number | null>({value:null, disabled: true}),
  });
  public faculties$: Observable<IFaculty[]> = this.store.select(selectFaculties);
  public departments$: Observable<IDepartmentDto[]> = combineLatest(
    this.store.select(selectDepartments),
    this.userForm.controls.facultyId.valueChanges,
  ).pipe(map(([departments, facultyId]) => {
      if (facultyId === null) return [];
      return departments?.filter(d => d.facultyId === +facultyId);
    }),
  );
  public groups$: Observable<IDepartmentDto[]> = combineLatest(
    this.store.select(selectGroups),
    this.userForm.controls.facultyId.valueChanges,
    this.userForm.controls.departmentId.valueChanges,
  ).pipe(map(([departments, facultyId, departmentId]) => {
      if (facultyId === null || departmentId === null) return [];
      return departments?.filter(g => g.departmentId === +departmentId);
    }),
  );

  constructor(
    private store: Store,
    protected override ngxSmartModalService: NgxSmartModalService,
  ) {
    super(ngxSmartModalService);
    this.identifier = ModalsIdentifiers.CreateUserModalIdentifier;
  }

  public handleAddedDataModal(data: { user: IUserDto, isForEdit: boolean }): void {
    this.isForEdit = data.isForEdit;

    if (data.isForEdit && data.user) {
      if(data.user.departmentId) this.userForm.controls.departmentId.enable();
      if(data.user.groupId) this.userForm.controls.groupId.enable();

      const user: IUserDto = {
        uuid: data.user.uuid,
        userType: +data.user.userType,
        name: data.user.name,
        fathersName: data.user.fathersName,
        lastName: data.user.lastName,
        email: data.user.email,
        password: data.user.password,
        coursesIds: data.user.coursesIds,
        groupId: data.user.groupId,
        facultyId: data.user.facultyId,
        departmentId: data.user.departmentId,
      };
      this.userForm.setValue(user);
    }
  }

  public handleCloseModal(): void {
    this.userForm.reset();
  }

  public submitForm(): void {
    if (this.userForm.invalid) return;
    const facultyId = Number(this.userForm!.controls!.facultyId!.value);
    const departmentId = Number(this.userForm!.controls!.departmentId!.value);

    const userDto: IUserDto = {
      uuid: Number(this.userForm.controls.uuid.value) as number,
      userType: Number(this.userForm.controls.userType.value) as number,
      name: this.userForm.controls.name.value || '',
      fathersName: this.userForm.controls.fathersName.value || '',
      lastName: this.userForm.controls.lastName.value || '',
      email: this.userForm.controls.email.value || '',
      password: this.userForm.controls.password.value || '',
      coursesIds: this.userForm.controls.coursesIds.value || [],
      groupId: Number(this.userForm.controls.groupId.value),
      facultyId,
      departmentId,
    };

    this.isForEdit
      ? this.onSubmitEdit.emit(userDto)
      : this.onSubmitCreate.emit(userDto);

    this.modalInstance.close();
  }
}
