import { Router } from 'express';

import { performanceReviewsController } from './performance-reviews.controller';


export const performanceReviewsRouter = Router();

performanceReviewsRouter.route('')
  .get((req, res) => {
    performanceReviewsController.getList(req.query)
      .then(reviews => res.json(reviews));
  })
  .post((req, res) => {
    performanceReviewsController.add(req.body)
      .then(review => res.json(review));
  });

performanceReviewsRouter.route('/pending')
  .get((_, res) => {
    performanceReviewsController.getPending(req.params)
      .then(pendingReviews => res.json(pendingReviews));
  })
  .post((req, res) => {
    performanceReviewsController.assign(req.body)
      .then(pendingReview => res.json(pendingReview));
  });
