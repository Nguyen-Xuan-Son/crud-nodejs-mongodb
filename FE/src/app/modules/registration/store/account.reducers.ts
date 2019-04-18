import {ActionTypes} from './account.actions';

export interface State {
  data: any;
  selected: any;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: null,
  selected: null,
  action: null,
  done: false,
  error: null
};

export function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.Login:
      return {
        ...state,
        action: action.type,
        done: false,
        selected: null,
        error: null
      };
    case ActionTypes.LoginSuccess:
      return {
        ...state,
        data: action.payload,
        action: action.type,
        done: true,
        selected: null,
        error: null
      };
    case ActionTypes.LoginFail:
      console.log('action', action);
      return {
        ...state,
        action: action.type,
        done: false,
        selected: null,
        error: action.payload
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
    default:
      return state;
  }
}
