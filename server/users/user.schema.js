import mongoose, { Schema } from 'mongoose';
import { omit } from '../utils/omit';

// FOR THIS DEMO ONLY, PASSWORDS ARE STORED IN PLAINTEXT

export const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  group: String,
  deleted: Boolean,
});

UserSchema.set('toJSON', {
  virtuals: true,
  transform: function(_, ret) {
    return omit(['__v', '_id', 'deleted', 'password'], ret);
  },
});

UserSchema.pre('save', function(next) {
  this.deleted = false;
  next();
});

export const User = mongoose.model('User', UserSchema);
