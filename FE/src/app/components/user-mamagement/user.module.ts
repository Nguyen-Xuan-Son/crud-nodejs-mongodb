import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  providers: [
  ],
  exports: []
})
export class UserModule {
}
