import mongoose from 'mongoose';

import { User } from '../users/user.schema';
import { PerformanceReview } from '../performance-reviews/performance-review.schema';
import { usersMock } from './users.mock';
import { comments as commentsList } from './performance-reviews.mock';
import { choose2 } from './choose2';
import { connectDb } from '../db';
import { DATABASE_URI } from '../constants';


mongoose.Promise = Promise;
mongoose.connect(DATABASE_URI, { useMongoClient: true });


connectDb()
  .then(removeAll)
  .then(createUsers)
  .then(createReviews)
  .then(() => {
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
    mongoose.connection.close();
  });

function removeAll() {
  return Promise.all([
    User.remove({}),
    PerformanceReview.remove({}),
  ]);
}

function createUsers() {
  return User.create(usersMock)
    .then(users => {
      console.log(`${users.length} users created`);
      return users;
    });
}

function createReviews(users) {
  const reviews = commentsList.map((comments) => {
    const [user1, user2] = choose2(users);
    return { revieweeId: user1.id, reviewerId: user2.id, comments };
  });

  return PerformanceReview.create(reviews)
    .then(reviewObjs => {
      console.log(`${reviewObjs.length} reviews created`);
    });
}
