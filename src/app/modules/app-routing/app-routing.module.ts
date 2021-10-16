import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from '../../hello.component';

const routes: Routes = [
  {
    path: '',
    //component: HomeComponent,
    component: HelloComponent,
    //canActivate: [AuthGuard]
  },
  //{
   // path: 'admin',
    //component: AdminComponent,
    //canActivate: [AuthGuard],
    //data: { roles: [Role.Admin] }
  //},
  //{
   // path: 'login',
    // component: LoginComponent
  //},
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
