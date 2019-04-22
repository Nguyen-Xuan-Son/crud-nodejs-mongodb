import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

import * as AccountAction from '../../../store/account/account.action';
import {AccountService} from '../../../store/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private account: Observable<any>;
  subscriptionLogin: Subscription;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private store: Store<any>
  ) {
    this.account = this.store.select('AccountReducer');
  }

  ngOnInit() {
    this.subscriptionLogin = this.account.subscribe(res => {
      if (res && res.action === AccountAction.ActionTypes.LoginSuccess) {
        const user = {
          token: res.data
        };
        this.accountService.setAuth(user);
        this.store.dispatch(new AccountAction.GetAccountAction());
        this.router.navigate(['/']);
      } else if (res.action === AccountAction.ActionTypes.LoginFail) {
        // TODO SHOW MESSAGE
      }
    });
  }

  loginWithGoogle() {
    this.store.dispatch(new AccountAction.LoginAction());
  }

  ngOnDestroy(): void {
    this.subscriptionLogin.unsubscribe();
  }
}
