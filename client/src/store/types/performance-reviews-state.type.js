// @flow

import type { PerformanceReviewId } from '../../types/performance-review-id.type';
import type { PerformanceReviewState } from './performance-review-state.type';


export type PerformanceReviewsState = {
  [PerformanceReviewId]: PerformanceReviewState;
}
