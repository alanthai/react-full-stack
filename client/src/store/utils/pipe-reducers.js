export function pipeReducers(...reducers) {
  return (state, action) => (
    reducers
      .reduce((oldState, reducer) => reducer(oldState, action), state)
  );
}
