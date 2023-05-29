import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    LoginPageComponent,
  ],
})
export class AuthorizationModule {
}
