import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AccountService} from '../../store/account/account.service';
import {ActionTypes, LogoutAction} from '../../store/account/account.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private account: Observable<any>;
  subscriptionLogout: Subscription;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private store: Store<any>
  ) {
    this.account = this.store.select('AccountReducer');
  }

  ngOnInit() {
    this.subscriptionLogout = this.account.subscribe((res) => {
      if (res && res.type && res.type === ActionTypes.LogoutSuccess) {
        this.router.navigate(['/login']);
      } else if (res && res.type && res.type === ActionTypes.GetAccountSuccess) {
        // this.user = res.payload;
      }
    });
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  ngOnDestroy(): void {
    this.subscriptionLogout.unsubscribe();
  }
}
