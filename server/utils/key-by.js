export function keyBy(key) {
  return array =>
    array.reduce((map, item) => {
      map[item[key]] = item;
      return map;
    }, {});
}
