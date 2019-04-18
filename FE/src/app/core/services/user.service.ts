import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {JwtService} from './jwt.service';
import {ApiService} from './api.service';
import {AuthService, SocialUser} from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

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
    return this.apiService.get('/logout').subscribe(() => {
      this.purgeAuth();
    });
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
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }
}
