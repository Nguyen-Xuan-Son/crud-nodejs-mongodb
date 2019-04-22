import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectRoutingModule} from './project-routing.module';

@NgModule({
  declarations: [
    ProjectDetailComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProjectRoutingModule
  ],
  providers: [
  ],
  exports: []
})
export class ProjectModule {
}
