import "./DeleteModal.scss";
import { deleteEmployee } from "./../../facades/employeesFacade";
import { IN_PROGRESS } from "../../utils/requests";
import { Loading } from "../Loading/Loading";

export function DeleteModal(props) {
  function onDeleteEmployee() {
    deleteEmployee(props.id);
  }

  return (
    <section>
      <h2>Delete Employee</h2>
      <p>Are you sure you want to delete this employee?</p>
      <div className="buttons">
        <button
          className="app-button secondary-button"
          onClick={() => props.onCloseModal()}
          disabled={props.deleteEmployeeRequest === IN_PROGRESS}
        >
          No, calm down...
        </button>
        <button
          className="app-button primary-button"
          onClick={() => onDeleteEmployee()}
          disabled={props.deleteEmployeeRequest === IN_PROGRESS}
        >
          {props.deleteEmployeeRequest !== IN_PROGRESS && "Yes, delete!"}
          {props.deleteEmployeeRequest === IN_PROGRESS && <Loading></Loading>}
        </button>
      </div>
    </section>
  );
}
