import {
  ADD_FOOD,
  CHANGE_CATEGORY,
  FOOD_LENGTH,
  GET_ALL_FOOD,
  SET_CUR_POST,
} from "../types/foodTypes";
import { setError } from "./errorAC";

export const addFood = (data) => {
  let {
    category,
    name,
    description,
    photo,
    quantity,
    validUntil,
    geolocation,
    city,
  } = data;
  geolocation = `${geolocation}, ${city}`;
  return (dispatch, getState) => {
    fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=c44f3c3e-02a3-4e09-8441-9da1eec78fa8&format=json&geocode=${geolocation}`
    )
      .then((res) => res.json())
      .then((res) => {
        let coordinate =
          res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
        return coordinate;
      })
      .then((coordinate) =>
        fetch("http://localhost:3001/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            category,
            name,
            description,
            photo,
            quantity,
            validUntil,
            geolocation,
            coordinate,
          }),
        })
      )
      .then(res => res.status === 400 ? dispatch(setError('Не удалось добавить публикацию')) : res.json().then(res => addFoodToState(res)))
  };
};

export const addFoodToState = (data) => {
  return {
    type: ADD_FOOD,
    payload: data,
  };
};
export const changeCategories = (data) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/products/${data}`)
      .then((response) => response.json())
      .then((response) => dispatch(changeCategoriesFromServer(response)));
  };
};

export const getAllFoodFromServer = () => {
  return async (dispatch, getState) => {
    const resp = await fetch("http://localhost:3001/products", {
      credentials: "include",
    });
    const data = await resp.json();

    dispatch(getAllFood(data));
    dispatch(setFoodLength(data));
  };
};

export const productSearch = (data) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/products/search/${data}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response) => dispatch(changeCategoriesFromServer(response)));
  };
};

export const getAllFood = (data) => {
  return {
    type: GET_ALL_FOOD,
    payload: data,
  };
};

export const changeCategoriesFromServer = (data) => {
  return {
    type: CHANGE_CATEGORY,
    payload: data,
  };
};

export const setFoodLength = (data) => {
  return {
    type: FOOD_LENGTH,
    payload: data,
  };
};
