import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {Event, NavigationEnd, Router} from '@angular/router';
import {AuthService, GoogleLoginProvider} from 'angularx-social-login';
import {Login, Logout} from '../../modules/registration/store/account.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  urlNotLogin: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<any>,
    private authService: AuthService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.urlNotLogin = event.url !== '/re/login';
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    // this.authService.signOut().then((res) => {
    //   console.log('res');
    //   this.profile.dispatch(new Logout());
    // });
    this.userService.logout();
  }
}
