import { CREATE_USER, UPDATE_FILTER, UPDATE_USER } from "./actionTypes";

export const updUser = (id: number, values: any) => ({
  type: UPDATE_USER, id, values
});

export const addUser = (values: any) => ({
  type: CREATE_USER, values
});

export const updFilter = (filter: any) => ({
  type: UPDATE_FILTER, filter
});