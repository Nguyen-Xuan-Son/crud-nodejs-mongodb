import {Injectable, OnInit} from '@angular/core';
import {AuthService, SocialUser} from 'angularx-social-login';

import {ApiService} from '../../core/services/api.service';
import {JwtService} from '../../core/services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {

  constructor(
    private jwtService: JwtService,
    private apiService: ApiService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  socialLogin() {
    return this.authService.authState;
  }

  checkLogin(res: SocialUser) {
    return this.apiService.post('/login', {idToken: res.idToken});
  }

  getAccount() {
    return this.apiService.get('/account');
  }

  logout() {
    return this.apiService.get('/logout');
  }

  populate() {
    // If JWT detected, attempt to get & profile profile's info
    if (this.jwtService.getToken()) {
      return this.apiService.get('/account');
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
  }

  update(data) {
    return this.apiService.put('/account', data);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
  }
}
