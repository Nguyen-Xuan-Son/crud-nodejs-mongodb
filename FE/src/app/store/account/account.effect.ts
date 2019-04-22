import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {
  ActionTypes,
  GetAccountErrorAction,
  GetAccountSuccessAction,
  LoginFailAction,
  LoginSuccessAction,
  LogoutSuccessAction,
  UpdateAccountSuccessAction,
  UpdateAccountErrorAction
} from './account.action';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {AuthService, GoogleLoginProvider} from 'angularx-social-login';
import {AccountService} from './account.service';

@Injectable()
export class AccountEffect {
  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private authService: AuthService
  ) {
  }

  @Effect()
  getUsers$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.Login),
    switchMap(() => this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)),
    switchMap(() => this.accountService.socialLogin()),
    switchMap((data) => {
      return this.accountService.checkLogin(data);
    }),
    map(res => new LoginSuccessAction(res.token)),
    catchError((err => [new LoginFailAction(err)]))
  );

  @Effect()
  getAccount$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.GetAccount),
    mergeMap(() => {
      return this.accountService.getAccount().pipe(
        map((res: any) => {
          return new GetAccountSuccessAction(res);
        })
      );
    }),
    catchError((err => [new GetAccountErrorAction(err)]))
  );

  @Effect()
  logout$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.Logout),
    switchMap(() => this.authService.signOut()),
    switchMap(() => this.accountService.logout()),
    map(() => this.accountService.purgeAuth()),
    map(() => new LogoutSuccessAction({mse: 'Logout success!'})),
    catchError((err => [new LoginFailAction(err)]))
  );

  @Effect()
  update$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.UpdateAccount),
    mergeMap((data: any) => {
      return this.accountService.update(data.payload).pipe(
        map((res: any) => {
          return new UpdateAccountSuccessAction(res);
        })
      );
    }),
    catchError((err => [new UpdateAccountErrorAction(err)]))
  );
}
