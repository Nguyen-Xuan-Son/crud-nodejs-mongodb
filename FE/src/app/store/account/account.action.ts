import {Action} from '@ngrx/store';

export enum ActionTypes {
  Login = '[Account Component] Login',
  LoginSuccess = '[Account Component] LoginSuccess',
  LoginFail = '[Account Component] LoginFail',
  Logout = '[Account Component] Logout',
  LogoutSuccess = '[Account Component] LogoutSuccess',
  LogoutFail = '[Account Component] LogoutFail',
  GetAccount = '[Account Component] GetAccount',
  GetAccountSuccess = '[Account Component] GetAccountSuccess',
  GetAccountError = '[Account Component] GetAccountError',
  UpdateAccount = '[Account Component] UpdateAccount',
  UpdateAccountSuccess = '[Account Component] UpdateAccountSuccess',
  UpdateAccountError = '[Account Component] UpdateAccountError',
}

export class LoginAction implements Action {
  readonly type = ActionTypes.Login;
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LoginSuccess;

  constructor(public payload: string) {
  }
}

export class LoginFailAction implements Action {
  readonly type = ActionTypes.LoginFail;

  constructor(public payload: {}) {
  }
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.Logout;
}

export class LogoutSuccessAction implements Action {
  readonly type = ActionTypes.LogoutSuccess;

  constructor(public payload: {}) {
  }
}

export class LogoutFailAction implements Action {
  readonly type = ActionTypes.LogoutFail;

  constructor(public payload: {}) {
  }
}

export class GetAccountAction implements Action {
  readonly type = ActionTypes.GetAccount;
}

export class GetAccountSuccessAction implements Action {
  readonly type = ActionTypes.GetAccountSuccess;

  constructor(public payload: {}) {
  }
}

export class GetAccountErrorAction implements Action {
  readonly type = ActionTypes.GetAccountError;

  constructor(public payload: {}) {
  }
}

export class UpdateAccountAction implements Action {
  readonly type = ActionTypes.UpdateAccount;

  constructor(public payload: {}) {
  }
}

export class UpdateAccountSuccessAction implements Action {
  readonly type = ActionTypes.UpdateAccountSuccess;

  constructor(public payload: {}) {
  }
}

export class UpdateAccountErrorAction implements Action {
  readonly type = ActionTypes.UpdateAccountError;

  constructor(public payload: {}) {
  }
}
