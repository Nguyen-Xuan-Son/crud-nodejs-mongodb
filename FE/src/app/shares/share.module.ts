import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthGuard} from './canActive/auth.canActive';
import {NoAuthGuard} from './canActive/no-auth.canActive';
import {NotFoundComponent} from './components/notFoundComponent/not-found.component';
import {ShareRoutingModule} from './share-routing.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  providers: [AuthGuard, NoAuthGuard]
})
export class SharedModule {
}
