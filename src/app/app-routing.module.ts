import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authorization',
    loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule),
  },
  {
    path: '',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule),
  },
  {
    path: '*/*',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
