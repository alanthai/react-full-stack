import { LOGIN } from '../actions/auth.actions';
import type { Action } from '../types/action.type';
import type { AuthState } from '../types/auth-state.type';


export function authReducer(state: AuthState = null, action: Action): AuthState {
  switch (action.type) {
    case LOGIN:
      const { id, token, expiry } = action.payload;
      return { id, token, expiry };
    default:
      return state;
  }
}
