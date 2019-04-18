import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'ac',
    loadChildren: './modules/registration/registration.module#RegistrationModule'
  },
  {
    path: 'skill',
    loadChildren: './modules/skill/skill.module#SkillModule'
  },
  {
    path: 'project',
    loadChildren: './modules/project/project.module#ProjectModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
