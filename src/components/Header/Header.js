import "./Header.scss";
import logo from "./../../assets/icons/logo.png";

export function Header() {
  return (
    <header>
      <img src={logo} alt="Page logo on title"></img>
      <h1>Employees</h1>
    </header>
  );
}
