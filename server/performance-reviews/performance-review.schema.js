import mongoose, { Schema } from 'mongoose';
import { omit } from '../utils/omit';


export const PerformanceReviewSchema = new Schema({
  revieweeId: String,
  reviewerId: String,
  completed: String, // ISO date
  comments: String,
});

PerformanceReviewSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    return omit(['__v', '_id'], ret);
  },
});

PerformanceReviewSchema.pre('save', function(next) {
  this.completed = new Date().toISOString();
  next();
});

export const PerformanceReview = mongoose.model('PerformanceReview', PerformanceReviewSchema);
