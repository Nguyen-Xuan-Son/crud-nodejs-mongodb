import {ActionTypes} from './account.action';

const initialState = {};

export function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.Login:
      return {
        ...state,
        action: action.type,
      };
    case ActionTypes.LoginSuccess:
      return {
        ...state,
        data: action.payload,
        action: action.type,
      };
    case ActionTypes.LoginFail:
      return {
        ...state,
        action: action.type,
      };

    case ActionTypes.GetAccountSuccess:
      state = action.payload;
      // TODO HANDLING SUCCESS
      return {
        ...action
      };

    case ActionTypes.GetAccountError:
      // TODO HANDLING ERROR
      return {
        ...action
      };

    case ActionTypes.LogoutSuccess:
      // TODO HANDLING SUCCESS
      return {
        ...action
      };

    case ActionTypes.LogoutFail:
      // TODO HANDLING SUCCESS
      return {
        ...action
      };
    default:
      return state;
  }
}
