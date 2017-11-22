import { combineReducers } from 'redux';

import {
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR,
  REMOVE_EMPLOYEE,
  REMOVE_EMPLOYEE_SUCCESS,
  REMOVE_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
} from '../actions/employees.actions';
import { webCallReducer } from './web-call.reducer';
import {
  FETCH_PERFORMANCE_REVIEWS,
  FETCH_PERFORMANCE_REVIEWS_SUCCESS,
  FETCH_PERFORMANCE_REVIEWS_ERROR,
} from '../actions/performance-reviews.actions';
import type { Action } from '../types/action.type';


const reviewReducer = webCallReducer([
  FETCH_PERFORMANCE_REVIEWS,
  FETCH_PERFORMANCE_REVIEWS_SUCCESS,
  FETCH_PERFORMANCE_REVIEWS_ERROR,
]);
function reviewsReducer(state = {}, action: Action) {
  switch (action.type) {
    case FETCH_PERFORMANCE_REVIEWS:
    case FETCH_PERFORMANCE_REVIEWS_SUCCESS:
    case FETCH_PERFORMANCE_REVIEWS_ERROR:
      const userId = action.meta;
      if (userId) {
        return { ...state, [userId]: reviewReducer(state[userId], action) };
      }
      return state;
    default:
      return state;
  }
}

export const employeesWebReducer = combineReducers({
  add: webCallReducer(
    [ADD_EMPLOYEE, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_ERROR]),
  list: webCallReducer(
    [FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_ERROR]),
  remove: webCallReducer(
    [REMOVE_EMPLOYEE, REMOVE_EMPLOYEE_SUCCESS, REMOVE_EMPLOYEE_ERROR]),
  update: webCallReducer(
    [UPDATE_EMPLOYEE, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_ERROR]),
  reviews: reviewsReducer,
});
