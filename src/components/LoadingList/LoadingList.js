import "./LoadingList.scss";
import listLoadingIllust from "./../../assets/imgs/listLoadingIllust.svg";
import { Loading } from "../Loading/Loading";

export function LoadingList() {
  return (
    <section data-testid="loading-list" className="loading-list-illust-section">
      <img src={listLoadingIllust} alt="Loading list"></img>
      <h4>Loading employees list...</h4>
      <Loading></Loading>
    </section>
  );
}
