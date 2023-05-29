import { AfterViewInit, Component } from '@angular/core';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { ModalsIdentifiers } from '../../constants/modals-identifiers.constant';
import { Unsubscriber } from '../unsubscriber/unsubscriber.component';

@Component({
  selector: 'app-base-modal',
  template: '',
})
export class BaseModalComponent extends Unsubscriber implements AfterViewInit {

  // public target: string;
  public identifier!: ModalsIdentifiers;
  public modalInstance!: NgxSmartModalComponent;

  constructor(
    protected ngxSmartModalService: NgxSmartModalService,
  ) {
    super();
  }

  ngAfterViewInit(): void {
    this.modalInstance = this.ngxSmartModalService.getModal(this.identifier);
    // this.target = getModalTarget(this.identifier);
  }
}
