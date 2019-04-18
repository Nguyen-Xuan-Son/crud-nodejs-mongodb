import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {
  ActionTypes,
  LoginFail,
  LoginSuccess,
  Logout,
  LogoutFail,
  LogoutSuccess,
  GetAccountSuccess,
  GetAccountError
} from './account.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {UserService} from '../../../core/services/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {
  }

  @Effect()
  getUsers$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.Login),
    switchMap(() => this.userService.socialLogin()),
    switchMap((data) => this.userService.checkLogin(data)),
    map(res => new LoginSuccess(res.token)),
    catchError((err => [new LoginFail(err)]))
  );

  @Effect()
  getAccount$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.GetAccount),
    mergeMap(() => {
      return this.userService.getAccount().pipe(
        map((res: any) => {
          return new GetAccountSuccess(res);
        })
      );
    }),
    catchError((err => [new GetAccountError(err)]))
  );
}
