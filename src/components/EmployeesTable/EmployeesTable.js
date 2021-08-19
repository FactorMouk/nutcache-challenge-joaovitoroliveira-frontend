import "./EmployeesTable.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getEmployeesList } from "./../../facades/employeesFacade";
import { EmployeeTableItem } from "../EmployeeTableItem/EmployeeTableItem";
import { GeneralModal } from "../GeneralModal/GeneralModal";
import { EmployeeForm } from "../EmployeeForm/EmployeeForm";
import { DeleteModal } from "../DeleteModal/DeleteModal";

export function EmployeesTable() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

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
                onSeeEditModal={(employeeModel) => {
                  setCurrentEmployee(employeeModel);
                  setShowEditModal(true);
                }}
                onSeeDeleteModal={(id) => {
                  setCurrentEmployee(id);
                  setShowDeleteModal(true);
                }}
              ></EmployeeTableItem>
            ))}
          </tbody>
        </table>
      </section>
      <GeneralModal
        show={showAddModal}
        onCloseModal={() => setShowAddModal(false)}
      >
        {showAddModal && <EmployeeForm type="add"></EmployeeForm>}
      </GeneralModal>
      <GeneralModal
        show={showEditModal}
        onCloseModal={() => setShowEditModal(false)}
      >
        {showEditModal && (
          <EmployeeForm
            type="edit"
            employeeData={currentEmployee}
          ></EmployeeForm>
        )}
      </GeneralModal>
      <GeneralModal
        show={showDeleteModal}
        onCloseModal={() => setShowDeleteModal(false)}
      >
        {showDeleteModal && (
          <DeleteModal
            id={currentEmployee}
            onCloseModal={() => setShowDeleteModal(false)}
          ></DeleteModal>
        )}
      </GeneralModal>
    </section>
  );
}
