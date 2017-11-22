// @flow

import type { Credentials } from '../../types/credentials.type';


export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';

export const login = (credentials: Credentials) => ({
  type: LOGIN,
  payload: credentials,
});

export const logout = () => ({ type: LOGOUT });
