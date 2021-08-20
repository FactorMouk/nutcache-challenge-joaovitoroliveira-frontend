import "./FormSelect.scss";
export function FormSelect(props) {
  return (
    <label>
      <span>
        {props.inputForm.label}
        {": "}
        {props.inputForm.isRequired && <span className="required-star">*</span>}
      </span>
      <select
        data-testid="form-input-value"
        className={props.inputForm.errors.length > 0 ? "input-error" : ""}
        name={props.name}
        id={props.id}
        required={props.inputForm.isRequired}
        value={props.inputForm.value}
        onChange={(e) => props.handleInput(e.target.value)}
      >
        {props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="error-label" data-testid="form-input-error">
        {props.inputForm.errors.map((error, index) => (
          <span key={index}>{error}</span>
        ))}
      </span>
    </label>
  );
}
