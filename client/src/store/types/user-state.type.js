// @flow

import type { UserId } from '../../types/user-id.type';
import type { UserGroupType } from '../../types/user-group.type';
import type { PerformanceReviewId } from '../../types/performance-review-id.type';


export interface UserState {
  +id: UserId;
  +email: string;
  +name: string;
  +group: UserGroupType;
  +pendingReviews: UserId[];
  +reviewIds?: PerformanceReviewId[];
}
