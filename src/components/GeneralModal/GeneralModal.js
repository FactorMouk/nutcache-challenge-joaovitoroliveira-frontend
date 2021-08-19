import "./GeneralModal.scss";
import closeIcon from "./../../assets/icons/close.png";

export function GeneralModal(props) {
  return (
    <article className={props.show ? " visible" : ""}>
      <button onClick={props.onCloseModal} className="close-button">
        <img src={closeIcon} alt="Close modal button"></img>
      </button>
      <section>{props.children}</section>
    </article>
  );
}
