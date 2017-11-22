// @flow

import type { UserId } from '../../types/user-id.type';


export interface AuthState {
  +id: UserId;
  +token: string;
  +expiry: number; // ISO date
}
