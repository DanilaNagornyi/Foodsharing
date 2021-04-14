import { AUTH, LOGOUT } from "../types/userTypes";
import { setError } from "./errorAC";

const regUser = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }).then((response) =>
      response.status === 200
        ? dispatch(userAuth(data.name))
        : dispatch(setError("Ошибка при регистрации"))
    );
  };
};

const regUserGoogle = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/user/registergoogle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }).then((response) =>
      response.status === 200
        ? dispatch(userAuth(data.name))
        : dispatch(setError("Ошибка при регистрации"))
    );
  };
};

const logUser = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => dispatch(userAuth(res.name)));
  };
};

export const logout = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/user/logout", {
      credentials: "include",
    }).then((response) =>
      response.status === 200
        ? dispatch(userLogout())
        : dispatch(setError("Ошибка при выходе из системы"))
    );
  };
};

const userAuth = (name = "") => {
  return {
    type: AUTH,
    payload: name,
  };
};

const userLogout = () => {
  return {
    type: LOGOUT,
  };
};

export { userAuth, regUser, logUser, regUserGoogle };
