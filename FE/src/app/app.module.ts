import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shares/share.module';

import {StoreModule} from './store/store.module';

import {AccountModule} from './components/account/account.module';
import {HomeModule} from './components/home/home.module';
import {ProjectModule} from './components/project-management/project.module';
import {SkillModule} from './components/skill-management/skill.module';
import {UserModule} from './components/user-mamagement/user.module';

import {HeaderComponent} from './layouts/header/header.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,

    AccountModule,
    ProjectModule,
    UserModule,
    SkillModule,
    HomeModule,

    StoreModule,
    CoreModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
