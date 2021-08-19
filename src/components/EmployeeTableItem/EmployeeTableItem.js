import "./EmployeeTableItem.scss";
import editIcon from "./../../assets/icons/edit.png";
import removeIcon from "./../../assets/icons/remove.png";

export function EmployeeTableItem(props) {
  return (
    <tr>
      <td>{props.employeeModel.name}</td>
      <td>{props.employeeModel.email}</td>
      <td>{props.employeeModel.startDate}</td>
      <td>{props.employeeModel.team}</td>
      <td>
        <aside>
          <img
            src={editIcon}
            alt="Edit employee button"
            onClick={() => props.onSeeEditModal(props.employeeModel)}
          ></img>
          <img
            src={removeIcon}
            alt="Remove employee button"
            onClick={() => props.onSeeDeleteModal(props.employeeModel._id)}
          ></img>
        </aside>
      </td>
    </tr>
  );
}
