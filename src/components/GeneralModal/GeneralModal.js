import "./GeneralModal.scss";
import closeIcon from "./../../assets/icons/close.png";

export function GeneralModal(props) {
  return (
    <div className={"wrap" + (props.show ? " visible" : "")}>
      <button onClick={props.onCloseModal} className="close-button">
        <img src={closeIcon} alt="Close modal button"></img>
      </button>
      <div className="modal">{props.children}</div>
    </div>
  );
}
