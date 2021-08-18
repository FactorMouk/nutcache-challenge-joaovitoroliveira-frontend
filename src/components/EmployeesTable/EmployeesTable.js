import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./EmployeesTable.scss";
import { getEmployeesList } from "./../../facades/employeesFacade";
import { EmployeeTableItem } from "../EmployeeTableItem/EmployeeTableItem";

export function EmployeesTable() {
  const employeesList = useSelector(
    (state) => state.employeesState.employeesList
  );

  useEffect(() => {
    getEmployeesList();
  }, []);

  return (
    <section className="EmployeesTable">
      <section className="table-header">
        <h2>List of Employees</h2>
        <button className="app-button primary-button">Add Employee</button>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Start Date</th>
              <th>Team</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.map((employeeModel, index) => (
              <EmployeeTableItem
                key={index}
                employeeModel={employeeModel}
              ></EmployeeTableItem>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
