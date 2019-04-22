import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule as Store} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AccountReducer} from './account/account.reducer';
import {AccountEffect} from './account/account.effect';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Store.forRoot({AccountReducer}),
    EffectsModule.forRoot([AccountEffect])
  ],
  providers: [AccountEffect]
})
export class StoreModule {
}
