import "./Loading.scss";
export function Loading() {
  return (
    <div data-testid="test-loading" className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
