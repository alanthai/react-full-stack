import { PerformanceReview } from './performance-review.schema';
import { PendingReview } from './pending-review.schema';

import { keyBy } from '../utils/key-by';
import { arrayToJSON } from '../utils/array-to-json';
import { pick } from "../utils/pick";


export const performanceReviewsController = {
  getList(params) {
    const query = params.revieweeId ? pick(['revieweeId'], params) : undefined;
    return PerformanceReview.find(query)
      .then(arrayToJSON)
      .then(keyBy('id'));
  },

  add(review) {
    return (new PerformanceReview(review)).save();
  },

  getPending(params) {
    return PendingReview.find(pick(['revieweeId'], params))
      .then(arrayToJSON)
      .then(keyBy('id'));
  },

  assign(params) {
    return (new PendingReview(pick(['revieweeId', 'reviewerId'], params))).save();
  },
};
