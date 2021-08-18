import { combineReducers } from "redux";
import { employeesReducer } from "./employeesReducer";

export const Reducers = combineReducers({
  employeesState: employeesReducer,
});
