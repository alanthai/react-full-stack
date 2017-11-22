// @flow

import type { UserId } from '../../types/user-id.type';
import type { UserState } from './user-state.type';


export type EmployeesState = {
  [UserId]: UserState;
}
