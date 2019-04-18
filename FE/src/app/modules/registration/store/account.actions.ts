import {Action} from '@ngrx/store';

export enum ActionTypes {
  Login = '[Login Component] Login',
  LoginSuccess = '[Login Component] LoginSuccess',
  LoginFail = '[Login Component] LoginFail',
  Logout = '[Login Component] Logout',
  LogoutSuccess = '[Login Component] LogoutSuccess',
  LogoutFail = '[Login Component] LogoutFail',
  GetAccount = '[Profile Component] GetAccount',
  GetAccountSuccess = '[Profile Component] GetAccountSuccess',
  GetAccountError = '[Profile Component] GetAccountError'
}

export class Login implements Action {
  readonly type = ActionTypes.Login;
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LoginSuccess;

  constructor(public payload: string) {
  }
}

export class LoginFail implements Action {
  readonly type = ActionTypes.LoginFail;

  constructor(public payload: {}) {
  }
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;
}

export class LogoutSuccess implements Action {
  readonly type = ActionTypes.LogoutSuccess;

  constructor(public payload: {}) {
  }
}

export class LogoutFail implements Action {
  readonly type = ActionTypes.LogoutFail;

  constructor(public payload: {}) {
  }
}

export class GetAccount implements Action {
  readonly type = ActionTypes.GetAccount;
}

export class GetAccountSuccess implements Action {
  readonly type = ActionTypes.GetAccountSuccess;

  constructor(public payload: {}) {
  }
}

export class GetAccountError implements Action {
  readonly type = ActionTypes.GetAccountError;

  constructor(public payload: {}) {
  }
}
