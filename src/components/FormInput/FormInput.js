import "./FormInput.scss";

export function FormInput(props) {
  return (
    <label>
      <span>
        {props.inputForm.label}
        {": "}
        {props.inputForm.isRequired && <span className="required-star">*</span>}
      </span>
      <input
        data-testid="form-input-value"
        className={props.inputForm.errors.length > 0 ? "input-error" : ""}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        required={props.inputForm.isRequired}
        value={props.inputForm.value}
        onChange={(e) => props.handleInput(e.target.value)}
      ></input>
      <span className="error-label" data-testid="form-input-error">
        {props.inputForm.errors.map((error, index) => (
          <span key={index}>{error} </span>
        ))}
      </span>
    </label>
  );
}
