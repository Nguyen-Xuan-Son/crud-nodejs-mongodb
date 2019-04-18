import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Account from '../../store/account.reducers';
import {Observable} from 'rxjs';
import * as AccountAction from '../../store/account.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-and-view-profile-component',
  templateUrl: './edit-and-view-profile.component.html',
  styleUrls: ['./edit-and-view-profile.component.scss']
})

export class EditAndViewProfileComponent implements OnInit {
  private account: Observable<any>;
  user = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(
    private store: Store<Account.State>
  ) {
    this.account = this.store.select('accountReducer');
  }

  ngOnInit(): void {
    this.getAccount();
    this.account.subscribe(res => {
      if (res && res.type === AccountAction.ActionTypes.GetAccountSuccess) {
        this.user.setValue({
          name: res.payload.name,
          email: res.payload.email
        });
      } else if (res && res.type === AccountAction.ActionTypes.GetAccountError) {
        console.log(res.payload.statusText);
        // TODO message show error
      }
    });
  }

  getAccount() {
    this.store.dispatch(new AccountAction.GetAccount());
  }
}
