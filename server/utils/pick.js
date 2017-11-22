export function pick(keys, obj) {
  return keys.reduce((newObj, key) => {
    newObj[key] = obj[key];
    return newObj;
  }, {});
}
