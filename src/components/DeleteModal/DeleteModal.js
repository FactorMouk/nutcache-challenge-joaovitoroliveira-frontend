import "./DeleteModal.scss";
import { deleteEmployee } from "./../../facades/employeesFacade";

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
        >
          No, calm down...
        </button>
        <button
          className="app-button primary-button"
          onClick={() => onDeleteEmployee()}
        >
          Yes, delete!
        </button>
      </div>
    </section>
  );
}
