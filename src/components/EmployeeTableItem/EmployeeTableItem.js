import "./EmployeeTableItem.scss";
import editIcon from "./../../assets/icons/edit.png";
import removeIcon from "./../../assets/icons/remove.png";

export function EmployeeTableItem(props) {
  return (
    <tr>
      <td data-testid="test-table-name">{props.employeeModel.name}</td>
      <td data-testid="test-table-email">{props.employeeModel.email}</td>
      <td
        data-testid="test-table-startDate"
        className="not-display-on-mobile700"
      >
        {props.employeeModel.startDate}
      </td>
      <td data-testid="test-table-team" className="not-display-on-mobile600">
        {props.employeeModel.team ? props.employeeModel.team : "None"}
      </td>
      <td>
        <aside>
          <img
            src={editIcon}
            alt="Edit employee button"
            data-testid="test-table-edit-button"
            onClick={() => props.onSeeEditModal(props.employeeModel)}
          ></img>
          <img
            src={removeIcon}
            alt="Remove employee button"
            data-testid="test-table-delete-button"
            onClick={() => props.onSeeDeleteModal(props.employeeModel._id)}
          ></img>
        </aside>
      </td>
    </tr>
  );
}
