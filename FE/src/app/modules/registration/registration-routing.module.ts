import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {NoAuthGuard} from './services/no-auth.guard';
import {EditAndViewProfileComponent} from './pages/edit-and-view-profile/edit-and-view-profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [NoAuthGuard]
  },
  {
    path: 'profile',
    component: EditAndViewProfileComponent,
    // canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {
}
