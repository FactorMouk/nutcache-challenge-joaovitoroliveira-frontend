import "./EmptyList.scss";
import emptyListIllust from "./../../assets/imgs/emptyListIllust.svg";

export function EmptyList() {
  return (
    <section data-testid="empty-list" className="empty-list-illust-section">
      <img src={emptyListIllust} alt="Empty list"></img>
      <h4>There are no employees here yet. How about adding someone?</h4>
    </section>
  );
}
