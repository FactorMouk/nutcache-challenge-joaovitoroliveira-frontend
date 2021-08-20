import "./EmployeesTable.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getEmployeesList } from "./../../facades/employeesFacade";
import { EmployeeTableItem } from "../EmployeeTableItem/EmployeeTableItem";
import { GeneralModal } from "../GeneralModal/GeneralModal";
import { EmployeeForm } from "../EmployeeForm/EmployeeForm";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { IN_PROGRESS, SUCCESSFUL } from "../../utils/requests";
import { Loading } from "../Loading/Loading";
import listLoadingIllust from "./../../assets/imgs/listLoadingIllust.svg";
import emptyListIllust from "./../../assets/imgs/emptyListIllust.svg";
import { GeneralToast } from "../GeneralToast/GeneralToast";

export function EmployeesTable() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const employeesList = useSelector(
    (state) => state.employeesState.employeesList
  );

  const employeesListRequest = useSelector(
    (state) => state.employeesState.requests.employeesList
  );

  const addEmployeeRequest = useSelector(
    (state) => state.employeesState.requests.addEmployee
  );

  const editEmployeeRequest = useSelector(
    (state) => state.employeesState.requests.updateEmployee
  );

  const deleteEmployeeRequest = useSelector(
    (state) => state.employeesState.requests.deleteEmployee
  );

  useEffect(() => {
    getEmployeesList();
  }, []);

  useEffect(() => {
    if (addEmployeeRequest === SUCCESSFUL) {
      setShowAddModal(false);
      endingAction("Employee added!");
    }
  }, [addEmployeeRequest]);

  useEffect(() => {
    if (editEmployeeRequest === SUCCESSFUL) {
      setShowEditModal(false);
      endingAction("Employee updated!");
    }
  }, [editEmployeeRequest]);

  useEffect(() => {
    if (deleteEmployeeRequest === SUCCESSFUL) {
      setShowDeleteModal(false);
      endingAction("Employee deleted!");
    }
  }, [deleteEmployeeRequest]);

  function endingAction(message) {
    getEmployeesList();
    setToastMessage(message);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 5000);
  }

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
      {employeesListRequest === IN_PROGRESS && (
        <section className="illust-section">
          <img src={listLoadingIllust} alt="Loading list"></img>
          <h4>Loading employees list...</h4>
          <Loading></Loading>
        </section>
      )}
      {employeesListRequest !== IN_PROGRESS && (
        <section>
          {employeesList.length === 0 && (
            <section className="illust-section">
              <img src={emptyListIllust} alt="Empty list"></img>
              <h4>
                There are no employees here yet. How about adding someone?
              </h4>
            </section>
          )}
          {employeesList.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th className="not-display-on-mobile700">Start Date</th>
                  <th className="not-display-on-mobile600">Team</th>
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
          )}
        </section>
      )}
      <GeneralModal
        show={showAddModal}
        loading={addEmployeeRequest === IN_PROGRESS}
        onCloseModal={() => setShowAddModal(false)}
      >
        {showAddModal && (
          <EmployeeForm
            type="add"
            addEmployeeRequest={addEmployeeRequest}
          ></EmployeeForm>
        )}
      </GeneralModal>
      <GeneralModal
        show={showEditModal}
        loading={editEmployeeRequest === IN_PROGRESS}
        onCloseModal={() => setShowEditModal(false)}
      >
        {showEditModal && (
          <EmployeeForm
            type="edit"
            employeeData={currentEmployee}
            editEmployeeRequest={editEmployeeRequest}
          ></EmployeeForm>
        )}
      </GeneralModal>
      <GeneralModal
        show={showDeleteModal}
        loading={deleteEmployeeRequest === IN_PROGRESS}
        onCloseModal={() => setShowDeleteModal(false)}
      >
        {showDeleteModal && (
          <DeleteModal
            id={currentEmployee}
            deleteEmployeeRequest={deleteEmployeeRequest}
            onCloseModal={() => setShowDeleteModal(false)}
          ></DeleteModal>
        )}
      </GeneralModal>
      {showToast && <GeneralToast message={toastMessage}></GeneralToast>}
    </section>
  );
}
