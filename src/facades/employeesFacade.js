import { store } from "./../store";
import {
  ADD_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_REQUEST,
  GET_EMPLOYEES_LIST_REQUEST,
  GET_EMPLOYEE_DETAIL_REQUEST,
  UPDATE_EMPLOYEE_REQUEST,
} from "../actions/actionsTypes";
import {
  addEmployeeRequestMiddleware,
  deleteEmployeeRequestMiddleware,
  getEmployeeDetailRequestMiddleware,
  getEmployeesListRequestMiddleware,
  updateEmployeeRequestMiddleware,
} from "../effects";

export function getEmployeesList() {
  store.dispatch({ type: GET_EMPLOYEES_LIST_REQUEST });
  store.dispatch(getEmployeesListRequestMiddleware);
}

export function getEmployeeDetail(id) {
  store.dispatch({ type: GET_EMPLOYEE_DETAIL_REQUEST });
  store.dispatch(getEmployeeDetailRequestMiddleware(id));
}

export function addEmployee(employeeData) {
  store.dispatch({ type: ADD_EMPLOYEE_REQUEST });
  store.dispatch(addEmployeeRequestMiddleware(employeeData));
}

export function updateEmployee(id, employeeData) {
  store.dispatch({ type: UPDATE_EMPLOYEE_REQUEST });
  store.dispatch(updateEmployeeRequestMiddleware(id, employeeData));
}

export function deleteEmployee(id) {
  store.dispatch({ type: DELETE_EMPLOYEE_REQUEST });
  store.dispatch(deleteEmployeeRequestMiddleware(id));
}
