import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationRoutingModule} from './registration-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/account.effects';
import {accountReducer} from './store/account.reducers';

import {LoginComponent} from './pages/login/login.component';
import {CoreModule} from '../../core/core.module';
import {NoAuthGuard} from './services/no-auth.guard';
import {EditAndViewProfileComponent} from './pages/edit-and-view-profile/edit-and-view-profile.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    EditAndViewProfileComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    StoreModule.forRoot({accountReducer}),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [
    NoAuthGuard
  ],
})
export class RegistrationModule {
}
