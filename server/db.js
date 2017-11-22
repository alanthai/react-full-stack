import mongoose from 'mongoose';
import { DATABASE_URI } from './constants';


mongoose.Promise = Promise;

export function connectDb() {
  return mongoose.connect(DATABASE_URI, { useMongoClient: true });
}
