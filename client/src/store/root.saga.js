import { fork } from 'redux-saga/effects';

import { employeesSaga } from '../employees/sagas/employees.saga';
import {
  performanceReviewsSaga
} from '../performance-reviews/sagas/performance-reviews.saga';


export function* rootSaga() {
  yield fork(employeesSaga);
  yield fork(performanceReviewsSaga);
}
