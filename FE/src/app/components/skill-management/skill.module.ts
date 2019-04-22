import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {SkillDetailComponent} from './skill-detail/skill-detail.component';
import {SkillListComponent} from './skill-list/skill-list.component';
import {SkillRoutingModule} from './skill-routing.module';

@NgModule({
  declarations: [
    SkillDetailComponent,
    SkillListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SkillRoutingModule
  ],
  providers: [
  ],
  exports: []
})
export class SkillModule {
}
