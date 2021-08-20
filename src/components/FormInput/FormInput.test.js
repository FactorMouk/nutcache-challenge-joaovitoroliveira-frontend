import React from "react";
import { render, screen } from "@testing-library/react";
import { FormInput } from "./FormInput";

const inputFormMock = {
  label: "Name",
  value: "",
  errors: [],
  isRequired: true,
  touched: false,
};

describe("FormInput", () => {
  test("FormInput has been rendered", () => {
    const formInput = render(
      <FormInput
        inputForm={inputFormMock}
        type="text"
        name="name"
        placeholder="José da Silva"
        maxLength="100"
      ></FormInput>
    );
    expect(formInput);
  });

  test("Input field shows value on edit", () => {
    const formInput = render(
      <FormInput
        inputForm={{
          ...inputFormMock,
          value: "José da Silva",
        }}
        type="text"
        name="name"
        placeholder="José da Silva"
        maxLength="100"
      ></FormInput>
    );
    expect(
      formInput.getByTestId("form-input-value").innerHTML === "José da Silva"
    );
  });

  test("Input field shows error message on error", () => {
    const formInput = render(
      <FormInput
        inputForm={{
          ...inputFormMock,
          value: "José da Silva",
          errors: ["Error"],
        }}
        type="text"
        name="name"
        placeholder="José da Silva"
        maxLength="100"
      ></FormInput>
    );
    expect(formInput.getByTestId("form-input-error")).toHaveTextContent(
      "Error"
    );
  });

  test("Input field has error class on error", () => {
    const formInput = render(
      <FormInput
        inputForm={{
          ...inputFormMock,
          value: "José da Silva",
          errors: ["Error"],
        }}
        type="text"
        name="name"
        placeholder="José da Silva"
        maxLength="100"
      ></FormInput>
    );
    expect(
      formInput.container.getElementsByClassName("error-label").length
    ).toBe(1);
  });
});
