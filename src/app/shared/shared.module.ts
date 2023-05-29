import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { Unsubscriber } from './components/unsubscriber/unsubscriber.component';
import { InputErrorMessagesComponent } from './components/error-messages/app-input-error-messages.component';
import { InputComponent } from './components/input/app-input.component';
import { ReactiveFormsModule } from '@angular/forms';

const declarations = [
  CardComponent,
  ButtonComponent,
  BaseModalComponent,
  Unsubscriber,
  InputComponent,
  InputErrorMessagesComponent,
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: declarations,
})
export class SharedModule {
}
