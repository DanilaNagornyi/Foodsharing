import { AUTH, LOGOUT } from "../types/userTypes";
import { setError } from "./errorAC";

const regUser = (data) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3001/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name: data.name, surname: data.surname, phone: data.phone, city: data.city, password: data.password, telegram: data.telegram, email: data.email }),
    })
    if (res.status === 200 && data.photo) {
      const result = await fetch(`http://localhost:3001/profile/avatar`, {
        method: "POST",
        credentials: "include",
        body: data.photo,
      });
      const responseFromServ = await result.json();
    }
    if (res.status === 200) {
      dispatch(userAuth(data.name))
    } else {
      console.log("Error registration");
    }
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
      .then(res => res.json())
      .then(res => dispatch(userAuth(res.name)))
  }
}

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
