import React from "react";
import { Provider } from "react-redux";
import { EmployeesTable } from "./EmployeesTable";
import { render, screen } from "@testing-library/react";
import { store } from "./../../store/";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { IN_PROGRESS, SUCCESSFUL } from "../../utils/requests";

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

describe("EmployeesTable", () => {
  test("EmployeesTable has been rendered", () => {
    const employeesTable = render(
      <Provider store={store}>
        <EmployeesTable />
      </Provider>
    );
    expect(employeesTable);
  });

  test("Shows load section when employees list has not been loaded", () => {
    const storeToTest = mockStore({
      employeesState: {
        requests: {
          employeesList: IN_PROGRESS,
        },
      },
    });
    const employeesTable = render(
      <Provider store={storeToTest}>
        <EmployeesTable />
      </Provider>
    );
    expect(employeesTable.getByTestId("loading-list")).toBeInTheDocument();
  });

  test("Shows empty section when employees list is empty", () => {
    const storeToTest = mockStore({
      employeesState: {
        employeesList: [],
        requests: {
          employeesList: SUCCESSFUL,
        },
      },
    });
    const employeesTable = render(
      <Provider store={storeToTest}>
        <EmployeesTable />
      </Provider>
    );
    expect(employeesTable.getByTestId("empty-list")).toBeInTheDocument();
  });

  test("Shows table when employees list is not empty", () => {
    const storeToTest = mockStore({
      employeesState: {
        employeesList: [employeeMock],
        requests: {
          employeesList: SUCCESSFUL,
        },
      },
    });
    const employeesTable = render(
      <Provider store={storeToTest}>
        <EmployeesTable />
      </Provider>
    );
    expect(employeesTable.getByTestId("employees-table")).toBeInTheDocument();
  });

  test("Click on add action open Add Modal", async () => {
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
    employeeTable.getByTestId("test-table-add-button").click();
    expect(employeeTable.getByTestId("add-form")).toBeInTheDocument();
  });
});
