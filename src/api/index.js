import { env } from "./../envs";
import axios from "axios";

const api = axios.create({
  baseURL: env.api,
  headers: {
    "Content-type": "application/json",
  },
});

export const getEmployeesList = () => {
  return api.get(`/nutemployee/`);
};

export const getEmployeeDetail = (id) => {
  return api.get(`/nutemployee/${id}`);
};

export const addEmployee = (employeeData) => {
  return api.post(`/nutemployee/`, employeeData);
};

export const updateEmployee = (id, employeeData) => {
  return api.put(`/nutemployee/${id}`, employeeData);
};

export const deleteEmployee = (id) => {
  return api.delete(`/nutemployee/${id}`);
};
