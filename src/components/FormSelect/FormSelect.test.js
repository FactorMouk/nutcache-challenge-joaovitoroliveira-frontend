import React from "react";
import { render, screen } from "@testing-library/react";
import { FormSelect } from "./FormSelect";

const selectFormMock = {
  label: "Gender",
  value: "Man cisgender",
  errors: [],
  isRequired: true,
  touched: false,
};

const options = ["A", "B", "C"];

describe("FormSelect", () => {
  test("FormSelect has been rendered", () => {
    const formSelect = render(
      <FormSelect
        inputForm={selectFormMock}
        name="gender"
        options={options}
      ></FormSelect>
    );
    expect(formSelect);
  });

  test("Select field shows error message on error", () => {
    const formSelect = render(
      <FormSelect
        inputForm={{
          ...selectFormMock,
          errors: ["Error"],
        }}
        name="gender"
        options={options}
      ></FormSelect>
    );
    expect(formSelect.getByTestId("form-input-error")).toHaveTextContent(
      "Error"
    );
  });

  test("Select field has error class on error", () => {
    const formSelect = render(
      <FormSelect
        inputForm={{
          ...selectFormMock,
          errors: ["Error"],
        }}
        name="gender"
        options={options}
      ></FormSelect>
    );
    expect(
      formSelect.container.getElementsByClassName("error-label").length
    ).toBe(1);
  });
});
