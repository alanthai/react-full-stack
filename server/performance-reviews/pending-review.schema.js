import mongoose, { Schema } from 'mongoose';
import { omit } from '../utils/omit';


export const PendingReviewSchema = new Schema({
  reviewerId: String,
  revieweeId: String,
});

PendingReviewSchema.set('toJSON', {
  transform: function(_, ret) {
    return omit(['__v', '_id'], ret);
  },
});

export const PendingReview = mongoose.model('PendingReview', PendingReviewSchema);
