// @flow

import type { PerformanceReviewId } from './performance-review-id.type';
import { UserSummary } from './user-summary.type';


export interface PerformanceReview {
  +id: PerformanceReviewId;
  +reviewee: UserSummary;
  +reviewer: UserSummary;
  +completed: number; // should be ISO string
  +comments: string;
}
