import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {AccountRoutingModule} from './account-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  providers: [
  ],
  exports: []
})
export class AccountModule {
}
