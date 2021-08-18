import "./EmployeeTableItem.scss";
import lookIcon from "./../../assets/icons/look.png";
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
          <img src={lookIcon} alt="See employee button"></img>
          <img src={editIcon} alt="Edit employee button"></img>
          <img src={removeIcon} alt="Remove employee button"></img>
        </aside>
      </td>
    </tr>
  );
}
