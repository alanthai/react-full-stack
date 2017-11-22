import { values } from '../../utils/values';

export const performanceReviews = (state) => values(state.performanceReviews);
export const performanceReview = (state) => (id) => state.performanceReviews[id];
export const pickPerformanceReview = (state, reviewIds) =>
  reviewIds.map(performanceReview(state));
