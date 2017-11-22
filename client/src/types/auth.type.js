// @flow

import { User } from './user.type';


export interface Auth extends User {
  +token: string;
  +expiry: number; // date
}
