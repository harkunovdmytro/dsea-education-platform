import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { BasePageComponent } from '../../components/base-page/base-page.component';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { ModalsIdentifiers } from '../../../shared/constants/modals-identifiers.constant';
import { Store } from '@ngrx/store';
import { Faculties } from '../../../shared/mocked-data/faculties.data';
import { selectFaculties } from '../../../store/selectors';
import { IFaculty } from '../../../shared/interfaces/faculty.interface';
import { Observable } from 'rxjs';
import { deleteFaculty, editFaculty, createFaculty } from '../../../store/actions';

@Component({
  selector: 'app-faculties-page',
  templateUrl: './faculties-page.component.html',
  styleUrls: ['./faculties-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacultiesPageComponent extends BasePageComponent implements AfterViewInit {
  public faculties: IFaculty[] = Faculties;
  public faculties$: Observable<IFaculty[]> = this.store.select(selectFaculties);
  public createEditFacultyModal!: NgxSmartModalComponent;

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    private store: Store,
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.createEditFacultyModal = this.ngxSmartModalService.getModal(ModalsIdentifiers.CreateFacultyModalIdentifier);
  }

  public openModal(faculty?: IFaculty): void {
    this.createEditFacultyModal.setData({
      faculty,
      isForEdit: !!faculty,
    }).open();
  }

  public deleteFaculty(id: number): void {
    this.store.dispatch(deleteFaculty({ id }));
  }

  public editFaculty(faculty: IFaculty): void {
    this.store.dispatch(editFaculty({ faculty }));
  }

  public createFaculty(faculty: IFaculty): void {
    this.store.dispatch(createFaculty({ faculty }));
  }
}
