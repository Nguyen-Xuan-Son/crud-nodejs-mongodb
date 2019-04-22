import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {AuthGuard} from '../../shares/canActive/auth.canActive';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}
