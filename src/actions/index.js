import {
  GET_EMPLOYEES_LIST_REQUEST,
  GET_EMPLOYEES_LIST_SUCCESSFUL,
  GET_EMPLOYEES_LIST_ERROR,
  GET_EMPLOYEE_DETAIL_REQUEST,
  GET_EMPLOYEE_DETAIL_SUCCESSFUL,
  GET_EMPLOYEE_DETAIL_ERROR,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESSFUL,
  ADD_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESSFUL,
  UPDATE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESSFUL,
  DELETE_EMPLOYEE_ERROR,
} from "./actionsTypes";

export const getEmployeesListRequest = () => ({
  type: GET_EMPLOYEES_LIST_REQUEST,
});
export const getEmployeesListSuccessful = (employeesList) => ({
  type: GET_EMPLOYEES_LIST_SUCCESSFUL,
  employeesList: employeesList,
});
export const getEmployeesListError = () => ({
  type: GET_EMPLOYEES_LIST_ERROR,
});

export const getEmployeeDetailRequest = () => ({
  type: GET_EMPLOYEE_DETAIL_REQUEST,
});
export const getEmployeeDetailSuccessful = (employeeDetail) => ({
  type: GET_EMPLOYEE_DETAIL_SUCCESSFUL,
  employeeDetail: employeeDetail,
});
export const getEmployeeDetailError = () => ({
  type: GET_EMPLOYEE_DETAIL_ERROR,
});

export const addEmployeeRequest = (employeeData) => ({
  type: ADD_EMPLOYEE_REQUEST,
  employeeData: employeeData,
});
export const addEmployeeSuccessful = () => ({
  type: ADD_EMPLOYEE_SUCCESSFUL,
});
export const addEmployeeError = () => ({
  type: ADD_EMPLOYEE_ERROR,
});

export const updateEmployeeRequest = (id, employeeData) => ({
  type: UPDATE_EMPLOYEE_REQUEST,
  id: id,
  employeeData: employeeData,
});
export const updateEmployeeSuccessful = () => ({
  type: UPDATE_EMPLOYEE_SUCCESSFUL,
});
export const updateEmployeeError = () => ({
  type: UPDATE_EMPLOYEE_ERROR,
});

export const deleteEmployeeRequest = (id) => ({
  type: DELETE_EMPLOYEE_REQUEST,
  id: id,
});
export const deleteEmployeeSuccessful = () => ({
  type: DELETE_EMPLOYEE_SUCCESSFUL,
});
export const deleteEmployeeError = () => ({
  type: DELETE_EMPLOYEE_ERROR,
});
