import {
  ADD_PERFORMANCE_REVIEW_SUCCESS,
  FETCH_PERFORMANCE_REVIEWS_SUCCESS,
  UPDATE_PERFORMANCE_REVIEW_SUCCESS,
} from '../actions/performance-reviews.actions';
import type { Action } from '../types/action.type';
import type { PerformanceReviewState } from '../types/performance-review-state.type';


export function performanceReviewsReducer(state: PerformanceReviewState = {}, action: Action): PerformanceReviewState {
  switch (action.type) {
    case ADD_PERFORMANCE_REVIEW_SUCCESS:
    case UPDATE_PERFORMANCE_REVIEW_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_PERFORMANCE_REVIEWS_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
