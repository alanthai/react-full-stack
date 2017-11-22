import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root.reducer';


const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

store.runSaga = sagaMiddleware.run;
