import { combineReducers } from 'redux';
import { reducer as formsReducer } from 'redux-form';

import { employeesReducer } from './reducers/employees.reducer';
import { employeesWebReducer } from './reducers/employees-web.reducer';
import { performanceReviewsReducer } from './reducers/performance-reviews.reducer';


export const rootReducer = combineReducers({
  employees: employeesReducer,
  performanceReviews: performanceReviewsReducer,
  webCalls: combineReducers({
    employeesWebReducer,
  }),
  form: formsReducer,
});
