import { AUTH, LOGOUT } from "../types/userTypes";

const regUser = (data) => {
  console.log(data, "from AC");
  return (dispatch, getState) => {
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
        : console.log("ошибка при регистрации")
    );
  };
};

const logUser = (data) => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => dispatch(userAuth(res.name)));
  };
};
export const logout = () => {
  console.log();
  return (dispatch, getState) => {
    fetch("http://localhost:3001/user/logout", {
      credentials: "include",
    }).then((response) =>
      response.status === 200
        ? dispatch(userLogout())
        : console.log("ошибка при logout")
    );
  };
};
const userAuth = (name = '') => {
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
export { userAuth, regUser, logUser };
