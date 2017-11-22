import { values } from '../../utils/values';
import { pickPerformanceReview } from './performance-reviews.selectors';
// import type { UserId } from '../../types/user-id.type';


export const employeesCall = (state) => state.webCalls.list;
export const employees = (state) => values(state.employees);
export const employee = (state, ownProps) => state.employees[ownProps.match.params.id];

export const employeeDetails = (state, ownProps) => {
  const e = employee(state, ownProps);

  if (!e || !e.reviewIds) {
    return e;
  }

  const reviews = pickPerformanceReview(state, e.reviewIds);
  return { ...e, reviews };
};
