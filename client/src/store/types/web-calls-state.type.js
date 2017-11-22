// @flow

import type { UserId } from '../../types/user-id.type';
import type { WebCall } from './web-call.type';

/**
 * Only used for API calls. Individual web calls have their own state
 * so that local loading/error handling is possible. Global loading/error handling
 * can be represented by separate `globalError` and `globalLoading` properties if
 * we want the entire page to react to all loading or errors.
 */
export interface WebCallsState {
  +user: WebCall;
  +employees: {
    +add: WebCall; // clear on page leave
    +list: WebCall;
    +remove: WebCall; // clear on page leave
    +update: WebCall; // clear on page leave
    +reviews: { +[id: UserId]: WebCall};
  };
  +performanceReviews: {
    +add: WebCall;
    +update: WebCall;
    +assign: WebCall;
  }
}
