// @flow

import type { PerformanceReviewId } from '../../types/performance-review-id.type';
import type { UserId } from '../../types/user-id.type';


export interface PerformanceReviewState {
  +id: PerformanceReviewId;
  +revieweeId: UserId;
  +reviewerId: UserId;
  +completed: number; // should be ISO string
  +comments: string;
}
