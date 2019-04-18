import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SocialLoginModule, AuthServiceConfig} from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
import {AuthGuard} from './services/auth-guard.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpTokenInterceptor} from './interceptors/http.token.interceptor';

import {JwtService} from './services/jwt.service';
import {UserService} from './services/user.service';
import {ApiService} from './services/api.service';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    AuthGuard,
    JwtService,
    ApiService,
    UserService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
}
