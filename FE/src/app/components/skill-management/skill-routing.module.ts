import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SkillDetailComponent} from './skill-detail/skill-detail.component';
import {SkillListComponent} from './skill-list/skill-list.component';
import {AuthGuard} from '../../shares/canActive/auth.canActive';

const routes: Routes = [
  {
    path: 'skills',
    component: SkillListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'skill/:id',
    component: SkillDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule {
}
