import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { BaseModalComponent } from '../../../../shared/components/base-modal/base-modal.component';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ModalsIdentifiers } from '../../../../shared/constants/modals-identifiers.constant';
import { ICourseDto } from '../../../../shared/interfaces/course.interface';
import { selectGroups, selectNotStudents } from '../../../../store/selectors';
import { combineLatest, map, startWith } from 'rxjs';

@Component({
  selector: 'app-create-edit-course-modal',
  templateUrl: './create-edit-course-modal.component.html',
  styleUrls: ['./create-edit-course-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEditCourseModalComponent extends BaseModalComponent {
  @Output() onSubmitCreate = new EventEmitter<ICourseDto>();
  @Output() onSubmitEdit = new EventEmitter<ICourseDto>();

  public isForEdit = false;
  public courseForm = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>('', [Validators.required]),
    creationDate: new FormControl(''),
    openingDate: new FormControl<string | null>(''),
    closingDate: new FormControl<string | null>(''),
    managers: new FormArray<FormControl<number | null>>([]),
    groups: new FormArray<FormControl<number | null>>([]),
    tests: new FormArray<FormControl<number | null>>([]),
  });
  public teachers$ = this.store.select(selectNotStudents);
  public pickedTeachers$ = combineLatest(
    this.teachers$,
    this.courseForm.controls.managers.valueChanges.pipe(startWith([] as number[])),
  ).pipe(
    map(([tearchers, managersIds]) => {
      return tearchers.filter(t => managersIds.includes(t.uuid));
    }),
  );
  public freeTeachers$ = combineLatest(
    this.teachers$,
    this.courseForm.controls.managers.valueChanges.pipe(startWith([] as number[])),
  ).pipe(
    map(([tearchers, managersIds]) => {
      return tearchers.filter(t => !managersIds.includes(t.uuid));
    }),
  );
  public groups$ = this.store.select(selectGroups);
  public pickedGroups$ = combineLatest(
    this.groups$,
    this.courseForm.controls.groups.valueChanges.pipe(startWith([] as number[])),
  ).pipe(
    map(([groups, pickedGroupsId]) => {
      return groups.filter(g => pickedGroupsId.includes(g.id));
    }),
  );
  public freeGroups$ = combineLatest(
    this.groups$,
    this.courseForm.controls.groups.valueChanges.pipe(startWith([] as number[])),
  ).pipe(
    map(([groups, pickedGroupsId]) => {
      return groups.filter(g => !pickedGroupsId.includes(g.id));
    }),
  );

  constructor(
    private store: Store,
    protected override ngxSmartModalService: NgxSmartModalService,
  ) {
    super(ngxSmartModalService);
    this.identifier = ModalsIdentifiers.CreateCourseModalIdentifier;
  }

  public handleAddedDataModal(data: { course: ICourseDto, isForEdit: boolean }): void {
    this.isForEdit = data.isForEdit;

    if (data.isForEdit && data.course) {
      const courseDto: ICourseDto = {
        id: data.course.id,
        name: data.course.name,
        openingDate: data.course.openingDate,
        creationDate: data.course.creationDate,
        closingDate: data.course.closingDate,
        tests: data.course.tests,
        groups: data.course.groups,
        managers: data.course.managers,
      };

      this.courseForm.patchValue(courseDto);

      data.course.managers.forEach((manager) => this.courseForm.controls.managers.push(new FormControl(manager)));
      data.course.groups.forEach((group) => this.courseForm.controls.groups.push(new FormControl(group)));
      data.course.tests.forEach((test) => this.courseForm.controls.tests.push(new FormControl(test)));
    }
  }

  public handleCloseModal(): void {
    this.courseForm.reset();
  }

  public submitForm(): void {
    if (this.courseForm.invalid) return;

    const courseDto: ICourseDto = {
      id: this.courseForm.value.id as number,
      name: this.courseForm.value.name || '',
      creationDate: new Date().getTime().toString(),
      openingDate: new Date().getTime().toString(),
      closingDate: new Date().getTime().toString(),
      tests: this.courseForm.controls.tests.value as number[],
      managers: this.courseForm.controls.managers.value as number[],
      groups: this.courseForm.controls.groups.value as number[],
    };

    this.isForEdit
      ? this.onSubmitEdit.emit(courseDto)
      : this.onSubmitCreate.emit(courseDto);

    this.modalInstance.close();
  }

  public moveManager(uuid: number, shouldAdd: boolean): void {
    if (shouldAdd) {
      this.courseForm.controls.managers.push(new FormControl(uuid));
      return;
    }

    const index: number = this.courseForm.value.managers?.findIndex(mId => mId === uuid) as number;
    this.courseForm.controls.managers.removeAt(index);
  }

  public moveGroup(uuid: number, shouldAdd: boolean): void {
    if (shouldAdd) {
      this.courseForm.controls.groups.push(new FormControl(uuid));
      return;
    }

    const index: number = this.courseForm.value.groups?.findIndex(mId => mId === uuid) as number;
    this.courseForm.controls.groups.removeAt(index);
  }
}
