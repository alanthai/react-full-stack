import { performanceReviewsMock } from './performance-reviews.mock';


export const performanceReviewsService = {
  getList() {
    return Promise.resolve(performanceReviewsMock.map);
  },

  get(reviewId) {
    return Promise.resolve(performanceReviewsMock.get(reviewId));
  },

  add(reviewForm) {
    return Promise.resolve(performanceReviewsMock.add(reviewForm));
  },

  update(employee) {
    return Promise.resolve(performanceReviewsMock.update(employee));
  },
};
