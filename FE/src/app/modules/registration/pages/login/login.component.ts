import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angularx-social-login';
import {Store} from '@ngrx/store';
import {Login, ActionTypes} from '../../store/account.actions';
import {UserService} from '../../../../core/services/user.service';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private login: Observable<any>;
  subscriptionLogin: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store<any>,
    private userService: UserService,
    private router: Router
  ) {
    this.login = this.store.select('accountReducer');
  }

  ngOnInit() {
    this.checkLogin();
    this.subscriptionLogin = this.login.subscribe(res => {
      if (res && res.data && res.action === ActionTypes.LoginSuccess) {
        const user = {
          token: res.data
        };
        this.userService.setAuth(user);
        this.router.navigate(['/']);
      } else if (res.action === ActionTypes.LoginFail) {
        // TODO SHOW MESSAGE
        console.log(res.error.statusText);
      }
    });
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  checkLogin() {
    this.store.dispatch(new Login());
  }

  ngOnDestroy(): void {
    this.subscriptionLogin.unsubscribe();
  }
}
