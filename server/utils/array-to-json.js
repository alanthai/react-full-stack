function toJSON(obj) {
  return obj.toJSON();
}

export function arrayToJSON(array) {
  return array.map(toJSON);
}
