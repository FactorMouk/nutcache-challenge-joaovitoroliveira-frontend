import "./GeneralToast.scss";

export function GeneralToast(props) {
  return (
    <section className="toast">
      <p>{props.message}</p>
    </section>
  );
}
