import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationModule } from './application/application.module';
import { SidebarComponent } from './application/components/sidebar/sidebar.component';
import { HeaderComponent } from './application/components/header/header.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { StoreModule } from '@ngrx/store';
import { mainReducer, mainReducerKey } from './store/reducer';
import { AdministrationModule } from './application/administration/administration.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ApplicationModule,
    NgxSmartModalModule.forRoot(),
    StoreModule.forRoot({ [mainReducerKey]: mainReducer }, {}),
    AdministrationModule,
    PopoverModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
