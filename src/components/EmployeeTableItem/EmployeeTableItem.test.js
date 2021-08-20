import React from "react";
import { Provider } from "react-redux";
import { EmployeesTable } from "./../EmployeesTable/EmployeesTable";
import { EmployeeTableItem } from "./EmployeeTableItem";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { render, screen } from "@testing-library/react";
import { store } from "../../store";
import { SUCCESSFUL } from "../../utils/requests";

const employeeMock = {
  name: "Frodo Bolseiro",
  birthDate: new Date().toTimeString(),
  gender: "Male cinsgender",
  email: "frodo@terramedia.com",
  cpf: "838.472.800-31",
  startDate: "08/2021",
  team: "Mobile",
};

const mockStore = configureMockStore([thunk]);

describe("EmployeeTableItem", () => {
  test("EmployeeTableItem has been rendered", () => {
    const employeeTableItem = render(
      <Provider store={store}>
        <table>
          <tbody>
            <EmployeeTableItem employeeModel={employeeMock} />
          </tbody>
        </table>
      </Provider>
    );
    expect(employeeTableItem);
  });

  test("EmployeeTableItem shows all fields", () => {
    const employeeTableItem = render(
      <Provider store={store}>
        <table>
          <tbody>
            <EmployeeTableItem employeeModel={employeeMock} />
          </tbody>
        </table>
      </Provider>
    );
    expect(employeeTableItem.getByTestId("test-table-name")).toHaveTextContent(
      "Frodo Bolseiro"
    );
    expect(employeeTableItem.getByTestId("test-table-email")).toHaveTextContent(
      "frodo@terramedia.com"
    );
    expect(
      employeeTableItem.getByTestId("test-table-startDate")
    ).toHaveTextContent("08/2021");
    expect(employeeTableItem.getByTestId("test-table-team")).toHaveTextContent(
      "Mobile"
    );
  });

  test("Click on edit action open Edit Modal", () => {
    const storeToTest = mockStore({
      employeesState: {
        employeesList: [employeeMock],
        requests: {
          employeesList: SUCCESSFUL,
        },
      },
    });
    const employeeTable = render(
      <Provider store={storeToTest}>
        <EmployeesTable></EmployeesTable>
      </Provider>
    );
    employeeTable.getByTestId("test-table-edit-button").click();
    expect(employeeTable.getByTestId("edit-form")).toBeInTheDocument();
  });

  test("Click on delete action open Delete Modal", () => {
    const storeToTest = mockStore({
      employeesState: {
        employeesList: [employeeMock],
        requests: {
          employeesList: SUCCESSFUL,
        },
      },
    });
    const employeeTable = render(
      <Provider store={storeToTest}>
        <EmployeesTable></EmployeesTable>
      </Provider>
    );
    employeeTable.getByTestId("test-table-delete-button").click();
    expect(employeeTable.getByTestId("delete-modal")).toBeInTheDocument();
  });
});
