import { User } from './user.schema';

import { keyBy } from '../utils/key-by';
import { arrayToJSON } from "../utils/array-to-json";


export const userController = {
  getList() {
    return User.find({ deleted: false })
    // return User.find()
      .then(arrayToJSON)
      .then(keyBy('id'));
  },

  get(userId) {
    return User.findById(userId);
  },

  add(userForm) {
    return (new User(userForm)).save();
  },

  update(userId, user) {
    // check id match
    return User.findByIdAndUpdate(userId, user, { new: true });
  },

  remove(userId) {
    return User.findByIdAndUpdate(userId, { deleted: true }, { new: true });
    // return User.findByIdAndRemove(userId);
  },
};
