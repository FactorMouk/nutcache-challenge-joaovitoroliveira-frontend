import React from "react";
import { render, screen } from "@testing-library/react";
import { EmployeeForm } from "./EmployeeForm";
import { IN_PROGRESS } from "../../utils/requests";

const employeeMock = {
  name: "Frodo Bolseiro",
  birthDate: new Date().toTimeString(),
  gender: "Male cinsgender",
  email: "frodo@terramedia.com",
  cpf: "838.472.800-31",
  startDate: "08/2021",
  team: "Mobile",
};

describe("EmployeeForm", () => {
  test("EmployeeForm has been rendered", () => {
    const employeeForm = render(<EmployeeForm></EmployeeForm>);
    expect(employeeForm);
  });

  test("Add texts has been showed on add type modal", () => {
    const employeeForm = render(<EmployeeForm type="add"></EmployeeForm>);
    expect(employeeForm.getByTestId("employee-form-title")).toHaveTextContent(
      "Add Employee"
    );
    expect(employeeForm.getByTestId("employee-form-button")).toHaveTextContent(
      "Add Employee"
    );
  });

  test("Edit texts has been showed on edit type modal", () => {
    const employeeForm = render(
      <EmployeeForm type="edit" employeeData={employeeMock}></EmployeeForm>
    );
    expect(employeeForm.getByTestId("employee-form-title")).toHaveTextContent(
      "Edit Employee"
    );
    expect(employeeForm.getByTestId("employee-form-button")).toHaveTextContent(
      "Edit Employee"
    );
  });

  test("Loading on add button when add action", () => {
    const employeeForm = render(
      <EmployeeForm type="add" addEmployeeRequest={IN_PROGRESS}></EmployeeForm>
    );
    expect(employeeForm.getByTestId("test-loading"));
  });

  test("Loading on edit button when edit action", () => {
    const employeeForm = render(
      <EmployeeForm
        type="edit"
        employeeData={employeeMock}
        editEmployeeRequest={IN_PROGRESS}
      ></EmployeeForm>
    );
    expect(employeeForm.getByTestId("test-loading"));
  });
});
