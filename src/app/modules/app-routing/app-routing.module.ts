import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from '../../hello.component';
import { LoginComponent } from '../../components/login/login.component';
import { HomeComponent } from '../../components/home/home.component';
import { AuthGuard } from '../../_helpers';
import { AdminComponent } from '../../components/admin/admin.component';
import { Role } from '../../_models';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // component: HelloComponent,
    canActivate: [AuthGuard],
  },
  {
 path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
