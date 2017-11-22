import {
  ADD_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEES_SUCCESS,
  REMOVE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
} from '../actions/employees.actions';
import type { Action } from '../types/action.type';
import type { EmployeesState } from '../types/employees-state.type';
import { omit } from '../../utils/omit';
import { FETCH_PERFORMANCE_REVIEWS_SUCCESS } from '../actions/performance-reviews.actions';


// We are unconcerned about whether employee info or reviews come first
// Add the first response, then patch the second one
function addOrPatch(state, id, partialItem) {
  if (!state[id]) {
    return { ...state, [id]: partialItem };
  }
  return { ...state, [id]: { ...state[id], ...partialItem } };
}

export function employeesReducer(state: EmployeesState = {}, action: Action): EmployeesState {
  switch (action.type) {
    case ADD_EMPLOYEE_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_EMPLOYEE_SUCCESS:
    case FETCH_EMPLOYEE_SUCCESS:
      return addOrPatch(state, action.payload.id, action.payload);
    case FETCH_PERFORMANCE_REVIEWS_SUCCESS:
      if (action.meta) {
        return addOrPatch(state, action.meta, { reviewIds: Object.keys(action.payload) });
      }
      return state;
    case REMOVE_EMPLOYEE_SUCCESS:
      return omit([action.payload], state);
    case FETCH_EMPLOYEES_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
