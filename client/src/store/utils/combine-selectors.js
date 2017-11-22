export function combineSelectors(selectorMap) {
  return (state, ownProps) => {
    return Object.keys(selectorMap)
      .reduce((map, key) => {
        const selector = selectorMap[key];
        map[key] = selector(state, ownProps);
        return map;
      }, {});
  }
}
