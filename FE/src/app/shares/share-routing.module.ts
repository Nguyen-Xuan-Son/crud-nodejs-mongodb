import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from './components/notFoundComponent/not-found.component';

const routes: Routes = [
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule {
}
