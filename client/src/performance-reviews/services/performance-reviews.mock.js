import { Table } from '../../utils/table.class';


function fakeReview(revieweeId, reviewerId, comments) {
  return {
    revieweeId,
    reviewerId,
    compelted: (new Date()).toISOString(),
    comments
  };
}

export const performanceReviewsMock = new Table([
  fakeReview('1', '2', 'Great stuff!'),
  fakeReview('2', '1', 'Less great stuff...'),
  fakeReview('1', '3', 'Absolutely OK'),
  fakeReview('3', '1', 'Terrifically awful'),
  fakeReview('2', '3', 'Cool person'),
  fakeReview('3', '2', 'Cool cat'),
]);
