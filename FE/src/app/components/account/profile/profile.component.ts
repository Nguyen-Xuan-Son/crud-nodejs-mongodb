import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';

import * as AccountAction from '../../../store/account/account.action';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit, OnDestroy {
  private account: Observable<any>;
  public user = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  subscriptionAccount: Subscription;

  constructor(
    private store: Store<any>
  ) {
    this.account = this.store.select('AccountReducer');
  }

  ngOnInit() {
    this.subscriptionAccount = this.account.subscribe(res => {
      if (res && res.type === AccountAction.ActionTypes.GetAccountSuccess) {
        this.user.setValue({
          name: res.payload.name,
          email: res.payload.email
        });
      } else if (res && res.type === AccountAction.ActionTypes.GetAccountError) {
        // TODO message show error
      } else if (res && !res.type) {
        this.getAccount();
      }
    });
  }

  getAccount() {
    this.store.dispatch(new AccountAction.GetAccountAction());
  }

  updateProfile() {
    this.store.dispatch(new AccountAction.UpdateAccountAction(this.user.value));
  }

  ngOnDestroy(): void {
    this.subscriptionAccount.unsubscribe();
  }
}
