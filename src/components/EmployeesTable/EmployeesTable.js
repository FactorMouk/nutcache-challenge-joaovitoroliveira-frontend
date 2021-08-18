import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./EmployeesTable.scss";
import { getEmployeesList } from "./../../facades/employeesFacade";
import { EmployeeTableItem } from "../EmployeeTableItem/EmployeeTableItem";
import { GeneralModal } from "../GeneralModal/GeneralModal";

export function EmployeesTable() {
  const [showAddModal, setShowAddModal] = useState(false);

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
        <button
          className="app-button primary-button"
          onClick={() => setShowAddModal(true)}
        >
          Add Employee
        </button>
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
      <GeneralModal
        show={showAddModal}
        onCloseModal={() => setShowAddModal(false)}
      >
        <div className="content">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132__340.jpg"
            alt="Developer"
          />
          <div className="text">
            <h2>John Doe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquid placeat omnis adipisci dolores quae amet mollitia sint,
              temporibus eum magnam facilis odio ex incidunt? Deleniti quam et
              rem obcaecati. Laborum atque odit expedita nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore laborum, assumenda dolorum provident quod itaque earum,
              officia in placeat dignissimos nostrum? Totam corrupti nihil
              repudiandae ducimus atque quod eos!
            </p>
          </div>
        </div>
      </GeneralModal>
    </section>
  );
}
