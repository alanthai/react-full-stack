import { keyBy } from './key-by';
import { values } from './values';
// import { toPairs } from './to-pairs';


// function filterObj(filterFn, obj) {
//   return Object.keys(obj)
//     .filter((key) => filterFn(obj[key]))
//     .reduce((newObj, key) => {
//       newObj[key] = obj[key];
//       return newObj;
//     }, {});
// }
//
// function shallowCompare(filterObj?: any) {
//   if (!filterObj) {
//     return true;
//   }
//   const filterPairs = toPairs(filterObj);
//   return (obj) => filterPairs.every(([key, value]) => obj[key] === value);
// }

/**
 * Used as a fake back end table
 */
export class Table {
  constructor(list) {
    this._id = 0; // private

    const listWithIds = list.map(item => ({ ...item, id: this.generateId() }));
    this.map = keyBy('id', listWithIds);
  }

  getList(filterObj?) {
    return values(this.map);
  }

  generateId() {
    return '' + this._id++;
  }

  get(userId) {
    return this.map[userId];
  }

  add(item) {
    const id = this.generateId();
    const newItem = { ...item, id };
    this.map[id] = newItem;
    return newItem;
  }

  remove(userId) {
    this.map[userId] = undefined;
  }

  update(item) {
    const updatedItem = { ...item };
    this.map[item.id] = updatedItem;
    return updatedItem;
  }
}
