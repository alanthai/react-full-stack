import { call, fork, put, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  ADD_EMPLOYEE,
  addEmployeeError,
  addEmployeeSuccess,
  FETCH_EMPLOYEES,
  fetchEmployeesError,
  fetchEmployeesSuccess,
  REMOVE_EMPLOYEE,
  removeEmployeeError,
  removeEmployeeSuccess,
  FETCH_EMPLOYEE,
  fetchEmployeeSuccess,
  fetchEmployeeError,
  UPDATE_EMPLOYEE,
  updateEmployeeSuccess,
  updateEmployeeError,
} from '../../store/actions/employees.actions';
import { employeesService } from '../services/employees.service';


function* addEmployee(action) {
  try {
    const data = yield call(employeesService.add, action.payload);
    yield put(addEmployeeSuccess(data));
  } catch (e) {
    yield put(addEmployeeError(e));
  }
}

function* watchAddEmployee() {
  yield takeEvery(ADD_EMPLOYEE, addEmployee);
}

function* fetchEmployee(action) {
  try {
    const data = yield call(employeesService.get, action.payload);
    yield put(fetchEmployeeSuccess(data));
  } catch (e) {
    yield put(fetchEmployeeError(e))
  }
}

function* watchFetchEmployee() {
  yield takeEvery(FETCH_EMPLOYEE, fetchEmployee);
}

function* fetchEmployees() {
  try {
    const data = yield call(employeesService.getList);
    yield put(fetchEmployeesSuccess(data));
  } catch (e) {
    yield put(fetchEmployeesError(e));
  }
}

function* watchFetchEmployees() {
  yield takeLatest(FETCH_EMPLOYEES, fetchEmployees);
}

function* removeEmployee(action) {
  try {
    yield call(employeesService.remove, action.payload);
    yield put(removeEmployeeSuccess(action.payload));
  } catch (e) {
    yield put(removeEmployeeError(e));
  }
}

function* watchRemoveEmployee() {
  yield takeEvery(REMOVE_EMPLOYEE, removeEmployee);
}

function* updateEmployee(action) {
  try {
    const data = yield call(employeesService.update, action.payload);
    yield put(updateEmployeeSuccess(data));
  } catch (e) {
    yield put(updateEmployeeError(e));
  }
}

function* watchUpdateEmployee() {
  yield takeEvery(UPDATE_EMPLOYEE, updateEmployee);
}

export function* employeesSaga() {
  yield fork(watchAddEmployee);
  yield fork(watchFetchEmployees);
  yield fork(watchRemoveEmployee);
  yield fork(watchFetchEmployee);
  yield fork(watchUpdateEmployee);
}
