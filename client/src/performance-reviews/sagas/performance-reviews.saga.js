import { call, fork, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { performanceReviewsService } from '../services/performance-reviews.service';
import {
  ADD_PERFORMANCE_REVIEW,
  addPerformanceReviewError,
  addPerformanceReviewSuccess,
  FETCH_PERFORMANCE_REVIEWS,
  fetchPerformanceReviewsError,
  fetchPerformanceReviewsSuccess
} from '../../store/actions/performance-reviews.actions';


function* addPerformanceReview(action) {
  try {
    const data = yield call(performanceReviewsService.add, action.payload);
    yield put(addPerformanceReviewSuccess(data));
  } catch (e) {
    yield put(addPerformanceReviewError(e));
  }
}

function* watchAddPerformanceReview() {
  yield takeEvery(ADD_PERFORMANCE_REVIEW, addPerformanceReview);
}

function* fetchPerformanceReviews(action) {
  try {
    const data = yield call(performanceReviewsService.getList, action.payload);
    yield put(fetchPerformanceReviewsSuccess(data, action.payload));
  } catch (e) {
    yield put(fetchPerformanceReviewsError(e));
  }
}

function* watchFetchPerformanceReviews() {
  yield takeLatest(FETCH_PERFORMANCE_REVIEWS, fetchPerformanceReviews);
}

export function* performanceReviewsSaga() {
  yield fork(watchFetchPerformanceReviews);
  yield fork(watchAddPerformanceReview);
}
