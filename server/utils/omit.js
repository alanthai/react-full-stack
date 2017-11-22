export function omit(keys, obj) {
  const omitSet = new Set(keys);
  return Object.keys(obj).reduce((newObj, key) => {
    if (!omitSet.has(key)) {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
}
