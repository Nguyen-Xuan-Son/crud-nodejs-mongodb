import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
