import "./EmployeeForm.scss";
import { useState } from "react";
import { cpfMask, startDateMask } from "./../../utils/masks";
import { FormInput } from "../FormInput/FormInput";
import { FormSelect } from "../FormSelect/FormSelect";
import { addEmployee, updateEmployee } from "../../facades/employeesFacade";

export function EmployeeForm(props) {
  const [form, setForm] = useState({
    name: {
      label: "Name",
      value:
        props.type === "edit" && props.employeeData !== null
          ? props.employeeData.name
          : "",
      errors: [],
      isRequired: true,
      touched: props.type === "edit" ? true : false,
    },
    birthDate: {
      label: "Birth Date",
      value:
        props.type === "edit" && props.employeeData !== null
          ? props.employeeData.birthDate.substring(0, 10)
          : "",
      errors: [],
      isRequired: true,
      touched: props.type === "edit" ? true : false,
    },
    gender: {
      label: "Gender",
      value:
        props.type === "edit" && props.employeeData !== null
          ? props.employeeData.gender
          : "Man cisgender",
      errors: [],
      isRequired: true,
      touched: props.type === "edit" ? true : false,
    },
    email: {
      label: "E-mail",
      value:
        props.type === "edit" && props.employeeData !== null
          ? props.employeeData.email
          : "",
      errors: [],
      isRequired: true,
      touched: props.type === "edit" ? true : false,
    },
    cpf: {
      label: "CPF",
      value:
        props.type === "edit" && props.employeeData !== null
          ? props.employeeData.cpf
          : "",
      errors: [],
      isRequired: true,
      useMask: "cpf",
      touched: props.type === "edit" ? true : false,
    },
    startDate: {
      label: "Start Date",
      value:
        props.type === "edit" && props.employeeData !== null
          ? props.employeeData.startDate
          : "",
      errors: [],
      isRequired: true,
      useMask: "startDate",
      touched: props.type === "edit" ? true : false,
    },
    team: {
      label: "Team",
      value:
        props.type === "edit" &&
        props.employeeData !== null &&
        props.employeeData.team !== null
          ? props.employeeData.team
          : "None",
      errors: [],
      state: "blank",
      isRequired: false,
      touched: props.type === "edit" ? true : false,
    },
  });

  function handleInput(value, input) {
    setForm({
      ...form,
      [input]: {
        ...form[input],
        errors: checkErrors(form[input].label, value, form[input].isRequired),
        value: form[input].useMask
          ? checkMask(form[input].useMask, value)
          : value,
        touched: true,
      },
    });
  }

  function checkMask(typeMask, value) {
    if (typeMask === "cpf") {
      return cpfMask(value);
    }
    if (typeMask === "startDate") {
      return startDateMask(value);
    }
  }

  function checkErrors(label, value, isRequired) {
    let errors = [];
    if (isRequired && value === "") {
      errors.push(`${label} is required!`);
    }
    return errors;
  }

  function isFormValid() {
    for (let key in form) {
      if (form[key].errors.length > 0 || !form[key].touched) {
        return false;
      }
    }
    return true;
  }

  function onSaveEmployee(e) {
    e.preventDefault();
    if (props.type === "add") {
      addEmployee({
        name: form.name.value,
        birthDate: form.birthDate.value,
        gender: form.gender.value,
        email: form.email.value,
        cpf: form.cpf.value,
        startDate: form.startDate.value,
        team: form.team.value === "None" ? null : form.team.value,
      });
    } else if (props.type === "edit") {
      updateEmployee(props.employeeData._id, {
        name: form.name.value,
        birthDate: form.birthDate.value,
        gender: form.gender.value,
        email: form.email.value,
        cpf: form.cpf.value,
        startDate: form.startDate.value,
        team: form.team.value === "None" ? null : form.team.value,
      });
    }
  }

  return (
    <section>
      <h2>{props.type === "add" ? "Add" : "Edit"} Employee</h2>
      <form>
        <FormInput
          inputForm={form.name}
          type="text"
          name="name"
          placeholder="José da Silva"
          maxLength="100"
          handleInput={(value) => handleInput(value, "name")}
        ></FormInput>
        <FormInput
          inputForm={form.birthDate}
          type="date"
          name="birthDate"
          placeholder="05/05/1995"
          handleInput={(value) => handleInput(value, "birthDate")}
        ></FormInput>
        <FormSelect
          inputForm={form.gender}
          name="gender"
          id="gender"
          options={[
            "Man cisgender",
            "Woman cisgender",
            "Man transgender",
            "Woman transgender",
            "Non binary",
            "Other",
          ]}
          handleInput={(value) => handleInput(value, "gender")}
        ></FormSelect>
        <FormInput
          inputForm={form.email}
          type="email"
          name="email"
          placeholder="jose@gmail.com"
          handleInput={(value) => handleInput(value, "email")}
        ></FormInput>
        <FormInput
          inputForm={form.cpf}
          type="text"
          name="cpf"
          placeholder="407.155.370-75"
          maxLength="14"
          handleInput={(value) => handleInput(value, "cpf")}
        ></FormInput>
        <FormInput
          inputForm={form.startDate}
          type="text"
          name="startDate"
          placeholder="08/2020"
          maxLength="7"
          handleInput={(value) => handleInput(value, "startDate")}
        ></FormInput>
        <FormSelect
          inputForm={form.team}
          name="team"
          id="team"
          options={["None", "Mobile", "Front-end", "Back-end"]}
          handleInput={(value) => handleInput(value, "team")}
        ></FormSelect>
        <button
          className="app-button primary-button"
          disabled={!isFormValid()}
          onClick={(e) => onSaveEmployee(e)}
        >
          {props.type === "add" && "Add Employee"}
          {props.type === "edit" && "Edit Employee"}
        </button>
      </form>
    </section>
  );
}
