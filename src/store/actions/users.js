import api from "../../apis/api";
import history from "../../history";

import {
  CREATE,
  FETCH_LIST,
  FETCH_SINGLE,
  DELETE,
  EDIT,
} from "./types";

// Action creator for fecthing user list
export const fetchList = () => {
  return async (dispatch) => {
    const response = await api.get("/users");
    dispatch({ type: FETCH_LIST, payload: response.data });
  };
};

// Action creator for fecthing a single user
export const fetchSingle = (id) => {
  return async (dispatch) => {
    const response = await api.get(`/users/${id}`);
    response.data["id"] = id;
    dispatch({ type: FETCH_SINGLE, payload: response.data });
  };
};

// Action creator for creating a new user
export const create = (formValues) => {
  return async (dispatch, getState) => {
    const response = await api.post("/users", { ...formValues });
    dispatch({ type: CREATE, payload: response.data });
    history.push("/");
  };
};

// Action creator for editing a single user
export const edit = (id, formValues) => {  
  return async (dispatch) => {
    const response = await api.patch(`/users/${id}`, formValues);
    response.data["id"] = id;
    dispatch({ type: EDIT, payload: response.data });
    history.push("/");
  };
};

// Action creator for deleting a single user
export const deleteUser = (id) => {
  return async (dispatch) => {
    await api.delete(`/users/${id}`);
    dispatch({ type: DELETE, payload: id });
    history.push("/");
  };
};
