export function keyBy(key, array) {
  return array.reduce((map, item) => {
    map[item[key]] = item;
    return map;
  }, {});
}
