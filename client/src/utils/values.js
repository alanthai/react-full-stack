// @flow

export function values(obj: any): $Values<any> {
  return Object.keys(obj).map(key => obj[key]);
}
