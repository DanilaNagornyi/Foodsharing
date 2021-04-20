import { setError } from './errorAC';
import {
  CHANGE_SUBSCRIBE,
  DELETE_SUBSCRIBE,
  GET_SUBCRIBE,
} from '../types/subcribeTypes';

export const changeSubscribe = (category) => {
  return (dispatch, getState) => {
    fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ category }),
    }).then((res) =>
      res.status === 200
        ? dispatch(changeSubscribetoState(category))
        : dispatch(setError('Не удалось подписаться на категорию'))
    );
  };
};

export const deleteSubscribe = (category) => {
  return (dispatch, getState) => {
    fetch('/subscribe', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ category }),
    }).then((res) =>
      res.status === 200
        ? dispatch(deleteSubscribefromState(category))
        : dispatch(setError('Не удалось отписаться от категории'))
    );
  };
};

export const getSubscribe = (category) => {
  return (dispatch, getState) => {
    fetch('/subscribe', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => dispatch(getSubscribeToState(res.subscribe)));
  };
};

export const getSubscribeToState = (data) => {
  return {
    type: GET_SUBCRIBE,
    payload: data,
  };
};
export const deleteSubscribefromState = (data) => {
  return {
    type: DELETE_SUBSCRIBE,
    payload: data,
  };
};

export const changeSubscribetoState = (data) => {
  return {
    type: CHANGE_SUBSCRIBE,
    payload: data,
  };
};
