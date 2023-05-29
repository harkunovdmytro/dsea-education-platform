import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseModalComponent } from '../../../../shared/components/base-modal/base-modal.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ModalsIdentifiers } from '../../../../shared/constants/modals-identifiers.constant';
import { IFaculty } from '../../../../shared/interfaces/faculty.interface';

@Component({
  selector: 'app-create-edit-faculty-modal',
  templateUrl: './create-edit-faculty-modal.component.html',
  styleUrls: ['./create-edit-faculty-modal.component.scss'],
})
export class CreateEditFacultyModalComponent extends BaseModalComponent {
  @Output() onSubmitCreate = new EventEmitter<IFaculty>();
  @Output() onSubmitEdit = new EventEmitter<IFaculty>();

  public isForEdit = false;
  public facultyForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    shortName: new FormControl('', [Validators.required]),
  });

  constructor(
    protected override ngxSmartModalService: NgxSmartModalService,
  ) {
    super(ngxSmartModalService);
    this.identifier = ModalsIdentifiers.CreateFacultyModalIdentifier;
  }

  public handleAddedDataModal(data: { faculty: IFaculty, isForEdit: boolean }): void {
    this.isForEdit = data.isForEdit;

    if (data.isForEdit && data.faculty) {
      this.facultyForm.setValue(data.faculty);
    }
  }

  public handleCloseModal(): void {
    this.facultyForm.reset();
  }

  public submitFaculty(): void {
    this.isForEdit
      ? this.onSubmitEdit.emit(this.facultyForm.value as IFaculty)
      : this.onSubmitCreate.emit(this.facultyForm.value as IFaculty);
  }
}
