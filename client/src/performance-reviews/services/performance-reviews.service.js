import { http } from '../../services/http.service';


export const performanceReviewsService = {
  getList(revieweeId: string) {
    return http.get(`/performance-reviews?revieweeId=${revieweeId}`);
  },

  add(reviewForm) {
    return http.post('/performance-reviews', reviewForm);
  },

  getPending(revieweeId: string) {
    return http.get(`/performance-reviews/pending?revieweeId=${revieweeId}`);
  },

  assign(pendingForm) {
    return http.post('/performance-reviews/pending', pendingForm);
  },
};
