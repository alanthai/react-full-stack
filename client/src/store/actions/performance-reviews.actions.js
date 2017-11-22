// @flow

import type { UserId } from '../../types/user-id.type';
import type { PerformanceReviewsState } from '../types/performance-reviews-state.type';
import type { PerformanceReviewState } from '../types/performance-review-state.type';


export const ADD_PERFORMANCE_REVIEW = 'performance-reviews/ADD';
export const ADD_PERFORMANCE_REVIEW_SUCCESS = 'performance-reviews/ADD_SUCCESS';
export const ADD_PERFORMANCE_REVIEW_ERROR = 'performance-reviews/ADD_ERROR';
export const ASSIGN_PERFORMANCE_REVIEW = 'performance-reviews/ASSIGN';
export const ASSIGN_PERFORMANCE_REVIEW_SUCCESS = 'performance-reviews/ASSIGN_SUCCESS';
export const ASSIGN_PERFORMANCE_REVIEW_ERROR = 'performance-reviews/ASSIGN_ERROR';
export const FETCH_PERFORMANCE_REVIEWS = 'performance-reviews/FETCH';
export const FETCH_PERFORMANCE_REVIEWS_SUCCESS = 'performance-reveiws/FETCH_SUCCESS';
export const FETCH_PERFORMANCE_REVIEWS_ERROR = 'performance-reviews/FETCH_ERROR';
export const UPDATE_PERFORMANCE_REVIEW = 'performance-reviews/UPDATE';
export const UPDATE_PERFORMANCE_REVIEW_SUCCESS = 'performance-review/UPDATE_SUCCESS';
export const UPDATE_PERFORMANCE_REVIEW_ERROR = 'performance-review/UPDATE_ERROR';

export const addPerformanceReview = (review: PerformanceReviewState) => ({
  type: ADD_PERFORMANCE_REVIEW,
  status: 'Loading',
  payload: review,
});

export const addPerformanceReviewSuccess = (review: PerformanceReviewState) => ({
  type: ADD_PERFORMANCE_REVIEW_SUCCESS,
  status: 'Success',
  payload: review,
});

export const addPerformanceReviewError = (error: any) => ({
  type: ADD_PERFORMANCE_REVIEW_ERROR,
  status: 'Error',
  payload: error,
});

export const assignPerformanceReview = (review: PerformanceReviewState) => ({
  type: ASSIGN_PERFORMANCE_REVIEW,
  status: 'Loading',
  payload: review,
});

export const assignPerformanceReviewSuccess = (review: PerformanceReviewState) => ({
  type: ASSIGN_PERFORMANCE_REVIEW_SUCCESS,
  status: 'Success',
  payload: review,
});

export const assignPerformanceReviewError = (error: any) => ({
  type: ASSIGN_PERFORMANCE_REVIEW_ERROR,
  status: 'Error',
  payload: error,
});


export const fetchPerformanceReviews = (userId?: UserId) => ({
  type: FETCH_PERFORMANCE_REVIEWS,
  status: 'Loading',
  payload: userId,
});

export const fetchPerformanceReviewsSuccess = (reviews: PerformanceReviewsState, userId?: UserId) => ({
  type: FETCH_PERFORMANCE_REVIEWS_SUCCESS,
  status: 'Success',
  payload: reviews,
  meta: userId,
});

export const fetchPerformanceReviewsError = (error: any) => ({
  type: FETCH_PERFORMANCE_REVIEWS_ERROR,
  status: 'Error',
  payload: error,
});

export const updatePerformanceReview = (review: PerformanceReviewState) => ({
  type: UPDATE_PERFORMANCE_REVIEW,
  status: 'Loading',
  payload: review,
});

export const updatePerformanceReviewSuccess = (review: PerformanceReviewState) => ({
  type: UPDATE_PERFORMANCE_REVIEW_SUCCESS,
  status: 'Success',
  payload: review,
});

export const updatePerformanceReviewError = (error: any) => ({
  type: UPDATE_PERFORMANCE_REVIEW_ERROR,
  status: 'Error',
  payload: error,
});
