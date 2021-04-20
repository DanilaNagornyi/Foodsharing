import { AUTH, LOGOUT } from '../types/userTypes';
import { setError } from './errorAC';

const regUser = (data) => {
  return async (dispatch) => {
    const res = await fetch('/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        city: data.city,
        password: data.password,
        telegram: data.telegram,
        email: data.email,
      }),
    });
    if (res.status === 200 && data.photo) {
      const result = await fetch(`/profile/avatar`, {
        method: 'POST',
        credentials: 'include',
        body: data.photo,
      });
      const responseFromServ = await result.json();
    }
    if (res.status === 200) {
      dispatch(userAuth(data.name));
    } else {
      console.log('Error registration');
    }
  };
};

const regUserGoogle = (data) => {
  return (dispatch) => {
    fetch('/user/registergoogle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }).then((response) =>
      response.status === 200
        ? dispatch(userAuth(data.name))
        : dispatch(setError('Ошибка при регистрации'))
    );
  };
};

const logUser = (data) => {
  return (dispatch) => {
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => dispatch(userAuth(res.name)));
  };
};

export const logout = () => {
  return (dispatch) => {
    fetch('/user/logout', {
      credentials: 'include',
    }).then((response) =>
      response.status === 200
        ? dispatch(userLogout())
        : dispatch(setError('Ошибка при выходе из системы'))
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

export { userAuth, regUser, logUser, regUserGoogle };
