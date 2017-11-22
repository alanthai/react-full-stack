import { usersRouter } from './users/users.router';
import { performanceReviewsRouter } from './performance-reviews/performance-reviews.router';


export function setRoutes(app) {
  app.use('/users', usersRouter);
  app.use('/performance-reviews', performanceReviewsRouter);
}
