import { LOGOUT } from '../actions/auth.actions';
import type { Action } from '../types/action.type';


export function authLogoutReducer(state, action: Action) {
  switch (action.type) {
    case LOGOUT:
      return undefined;
    default:
      return state;
  }
}
