import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { BasePageComponent } from '../../components/base-page/base-page.component';
import { Observable } from 'rxjs';
import { selectGroupsForView } from '../../../store/selectors';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { Store } from '@ngrx/store';
import { ModalsIdentifiers } from '../../../shared/constants/modals-identifiers.constant';
import { IGroupDto, IGroupForView } from '../../../shared/interfaces/group.interface';
import { createGroup, deleteGroup, editGroup } from '../../../store/actions';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsPageComponent extends BasePageComponent implements AfterViewInit {
  public groupForView$: Observable<IGroupForView> = this.store.select(selectGroupsForView);
  public createEditGroupModal!: NgxSmartModalComponent;

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    private store: Store,
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.createEditGroupModal = this.ngxSmartModalService.getModal(ModalsIdentifiers.CreateGroupModalIdentifier);
  }

  public openModal(group?: IGroupDto): void {
    this.createEditGroupModal.setData({
      group,
      isForEdit: !!group,
    }).open();
  }

  public deleteGroup(id: number): void {
    this.store.dispatch(deleteGroup({ id }));
  }

  public editGroup(group: IGroupDto): void {
    this.store.dispatch(editGroup({ group }));
  }

  public createGroup(group: IGroupDto): void {
    this.store.dispatch(createGroup({ group }));
  }
}
