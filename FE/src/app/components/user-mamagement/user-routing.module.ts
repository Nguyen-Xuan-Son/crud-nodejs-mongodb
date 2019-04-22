import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserListComponent} from './user-list/user-list.component';
import {AuthGuard} from '../../shares/canActive/auth.canActive';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
