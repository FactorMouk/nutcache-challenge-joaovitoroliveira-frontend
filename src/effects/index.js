import {
  getEmployeesList,
  getEmployeeDetail,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./../api";
import {
  GET_EMPLOYEES_LIST_SUCCESSFUL,
  GET_EMPLOYEES_LIST_ERROR,
  GET_EMPLOYEE_DETAIL_SUCCESSFUL,
  GET_EMPLOYEE_DETAIL_ERROR,
  ADD_EMPLOYEE_SUCCESSFUL,
  ADD_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_SUCCESSFUL,
  UPDATE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_SUCCESSFUL,
  DELETE_EMPLOYEE_ERROR,
} from "./../actions/actionsTypes";

export async function getEmployeesListRequestMiddleware(dispatch) {
  getEmployeesList()
    .then((response) => {
      dispatch({
        type: GET_EMPLOYEES_LIST_SUCCESSFUL,
        employeesList: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: GET_EMPLOYEES_LIST_ERROR,
      });
    });
}

export function getEmployeeDetailRequestMiddleware(id) {
  return async function getEmployeeDetailRequest(dispatch) {
    getEmployeeDetail(id)
      .then((employeeDetail) => {
        dispatch({
          type: GET_EMPLOYEE_DETAIL_SUCCESSFUL,
          employeeDetail,
        });
      })
      .catch(() => {
        dispatch({ type: GET_EMPLOYEE_DETAIL_ERROR });
      });
  };
}

export function addEmployeeRequestMiddleware(employeeData) {
  return async function addEmployeeRequest(dispatch) {
    addEmployee(employeeData)
      .then(() => {
        dispatch({
          type: ADD_EMPLOYEE_SUCCESSFUL,
        });
      })
      .catch(() => {
        dispatch({ type: ADD_EMPLOYEE_ERROR });
      });
  };
}

export function updateEmployeeRequestMiddleware(id, employeeData) {
  return async function updateEmployeeRequest(dispatch) {
    updateEmployee(id, employeeData)
      .then(() => {
        dispatch({
          type: UPDATE_EMPLOYEE_SUCCESSFUL,
        });
      })
      .catch(() => {
        dispatch({ type: UPDATE_EMPLOYEE_ERROR });
      });
  };
}

export function deleteEmployeeRequestMiddleware(id) {
  return async function deleteEmployeeRequest(dispatch) {
    deleteEmployee(id)
      .then(() => {
        dispatch({
          type: DELETE_EMPLOYEE_SUCCESSFUL,
        });
      })
      .catch(() => {
        dispatch({ type: DELETE_EMPLOYEE_ERROR });
      });
  };
}
