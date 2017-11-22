// @flow

import type { UserId } from './user-id.type';
import type { UserGroup } from './user-group.type';
import { UserSummary } from './user-summary.type';


export interface User {
  +id: UserId;
  +email: string;
  +name: string;
  +group: UserGroup;
  +pendingReviews: UserSummary[];
}
