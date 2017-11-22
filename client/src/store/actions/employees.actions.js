// @flow

import type { UserId } from '../../types/user-id.type';
import type { UserState } from '../types/user-state.type';
import type { EmployeesState } from '../types/employees-state.type';
import { WebStatus } from '../types/web-status.type';


export const ADD_EMPLOYEE = 'employees/ADD';
export const ADD_EMPLOYEE_SUCCESS = 'employees/ADD_SUCCESS';
export const ADD_EMPLOYEE_ERROR = 'employees/ADD_ERROR';
export const FETCH_EMPLOYEE = 'employees/FETCH_ONE';
export const FETCH_EMPLOYEE_SUCCESS = 'employees/FETCH_ONE_SUCCESS';
export const FETCH_EMPLOYEE_ERROR = 'employees/FETCH_ONE_ERROR';
export const FETCH_EMPLOYEES = 'employees/FETCH';
export const FETCH_EMPLOYEES_SUCCESS = 'employees/FETCH_SUCCESS';
export const FETCH_EMPLOYEES_ERROR = 'employees/FETCH_ERROR';
export const REMOVE_EMPLOYEE = 'employees/REMOVE';
export const REMOVE_EMPLOYEE_SUCCESS = 'employees/REMOVE_SUCCESS';
export const REMOVE_EMPLOYEE_ERROR = 'employees/REMOVE_ERROR';
export const UPDATE_EMPLOYEE = 'employees/UPDATE';
export const UPDATE_EMPLOYEE_SUCCESS = 'employees/UPDATE_SUCCESS';
export const UPDATE_EMPLOYEE_ERROR = 'employees/UPDATE_ERROR';

export const addEmployee = (employee: UserState) => ({
  type: ADD_EMPLOYEE,
  status: WebStatus.Loading,
  payload: employee,
});

export const addEmployeeSuccess = (employee: UserState) => ({
  type: ADD_EMPLOYEE_SUCCESS,
  status: WebStatus.Success,
  payload: employee,
});

export const addEmployeeError = (error: any) => ({
  type: ADD_EMPLOYEE_ERROR,
  status: WebStatus.Error,
  payload: error,
});

export const fetchEmployee = (employeeId: UserId) => ({
  type: FETCH_EMPLOYEE,
  status: WebStatus.Loading,
  payload: employeeId,
});

export const fetchEmployeeSuccess = (employee: UserState) => ({
  type: FETCH_EMPLOYEE_SUCCESS,
  status: WebStatus.Success,
  payload: employee,
});

export const fetchEmployeeError = (error: any) => ({
  type: FETCH_EMPLOYEE_ERROR,
  status: WebStatus.Error,
  payload: error,
});

export const fetchEmployees = () => ({
  type: FETCH_EMPLOYEES,
  status: WebStatus.Loading,
});

export const fetchEmployeesSuccess = (employees: EmployeesState) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  status: WebStatus.Success,
  payload: employees,
});

export const fetchEmployeesError = (error: any) => ({
  type: FETCH_EMPLOYEES_ERROR,
  status: WebStatus.Error,
  payload: error,
});

export const removeEmployee = (employeeId: UserId) => ({
  type: REMOVE_EMPLOYEE,
  status: WebStatus.Loading,
  payload: employeeId,
});

export const removeEmployeeSuccess = (employeeId: UserId) => ({
  type: REMOVE_EMPLOYEE_SUCCESS,
  status: WebStatus.Success,
  payload: employeeId,
});

export const removeEmployeeError = (error: any) => ({
  type: REMOVE_EMPLOYEE_ERROR,
  status: WebStatus.Error,
  payload: error,
});

export const updateEmployee = (employee: UserState) => ({
  type: UPDATE_EMPLOYEE,
  status: WebStatus.Loading,
  payload: employee,
});

export const updateEmployeeSuccess = (employee: UserState) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  status: WebStatus.Success,
  payload: employee,
});

export const updateEmployeeError = (error: any) => ({
  type: UPDATE_EMPLOYEE_ERROR,
  status: WebStatus.Error,
  payload: error,
});
