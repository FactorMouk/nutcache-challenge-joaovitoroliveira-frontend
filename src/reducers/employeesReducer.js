import {
  NOT_ASKED,
  IN_PROGRESS,
  SUCCESSFUL,
  FAILED,
} from "./../utils/requests";

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
} from "./../actions/actionsTypes";

const initialState = {
  employeesList: [],
  employeeDetail: null,
  requests: {
    employeesList: NOT_ASKED,
    employeeDetail: NOT_ASKED,
    addEmployee: NOT_ASKED,
    updateEmployee: NOT_ASKED,
    deleteEmployee: NOT_ASKED,
  },
};
export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_LIST_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          employeesList: IN_PROGRESS,
        },
      };
    case GET_EMPLOYEES_LIST_SUCCESSFUL:
      return {
        ...state,
        employeesList: action.employeesList,
        requests: {
          ...state.requests,
          employeesList: SUCCESSFUL,
        },
      };
    case GET_EMPLOYEES_LIST_ERROR:
      return {
        ...state,
        requests: {
          ...state.requests,
          employeesList: FAILED,
        },
      };
    case GET_EMPLOYEE_DETAIL_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          employeeDetail: IN_PROGRESS,
        },
      };
    case GET_EMPLOYEE_DETAIL_SUCCESSFUL:
      return {
        ...state,
        employeeDetail: action.employeeDetail,
        requests: {
          ...state.requests,
          employeeDetail: SUCCESSFUL,
        },
      };
    case GET_EMPLOYEE_DETAIL_ERROR:
      return {
        ...state,
        requests: {
          ...state.requests,
          employeeDetail: FAILED,
        },
      };
    case ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          addEmployee: IN_PROGRESS,
        },
      };
    case ADD_EMPLOYEE_SUCCESSFUL:
      return {
        ...state,
        requests: {
          ...state.requests,
          addEmployee: SUCCESSFUL,
        },
      };
    case ADD_EMPLOYEE_ERROR:
      return {
        ...state,
        requests: {
          ...state.requests,
          addEmployee: FAILED,
        },
      };
    case UPDATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          updateEmployee: IN_PROGRESS,
        },
      };
    case UPDATE_EMPLOYEE_SUCCESSFUL:
      return {
        ...state,
        requests: {
          ...state.requests,
          updateEmployee: SUCCESSFUL,
        },
      };
    case UPDATE_EMPLOYEE_ERROR:
      return {
        ...state,
        requests: {
          ...state.requests,
          updateEmployee: FAILED,
        },
      };
    case DELETE_EMPLOYEE_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          deleteEmployee: IN_PROGRESS,
        },
      };
    case DELETE_EMPLOYEE_SUCCESSFUL:
      return {
        ...state,
        requests: {
          ...state.requests,
          deleteEmployee: SUCCESSFUL,
        },
      };
    case DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        requests: {
          ...state.requests,
          deleteEmployee: FAILED,
        },
      };
    default:
      return state;
  }
};
