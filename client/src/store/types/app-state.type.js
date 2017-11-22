// @flow

import type { AuthState } from './auth-state.type';
import type { EmployeesState } from './employees-state.type';
import type { PerformanceReviewsState } from './performance-reviews-state.type';
import type { WebCallsState } from './web-calls-state.type';


export interface AppState {
  +auth?: AuthState; // authenticated only
  +employees?: EmployeesState; // employees only
  +performanceReviews?: PerformanceReviewsState; // employees only
  +webCalls: WebCallsState;
}
