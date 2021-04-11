import { ADD_FOOD, CHANGE_CATEGORY, FOOD_LENGTH, GET_ALL_FOOD, SET_CUR_POST } from "../types/foodTypes"

export const addFood = (data) => {

  let { category, name, description, photo, quantity, validUntil, geolocation, city } = data
  geolocation = `${geolocation}, ${city}`
  return (dispatch, getState) => {
    fetch('http://localhost:3001/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ category, name, description, photo, quantity, validUntil, geolocation })
    })
      .then(response => response.json())
      .then(response => addFoodToState(response))
  }
}

export const addFoodToState = (data) => {
  console.log(data);
  return {
    type: ADD_FOOD,
    payload: data
  }
}
export const changeCategories = (data) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/products/${data}`)
      .then(response => response.json())
      .then(response => dispatch(changeCategoriesFromServer(response)))
  }
}

export const getAllFoodFromServer = () => {
  return async (dispatch, getState) => {
    const resp = await fetch('http://localhost:3001/products', {
      credentials: 'include',
    })
    const data = await resp.json()

    dispatch(getAllFood(data))
    dispatch(setFoodLength(data))

  }
}


export const productSearch = (data) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/products/search/${data}`, {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(response => dispatch(getAllFood(response)))
  }
}

export const getAllFood = (data) => {
  console.log(data);
  return {
    type: GET_ALL_FOOD,
    payload: data
  }
}

export const changeCategoriesFromServer = (data) => {
  console.log(data);
  return {
    type: CHANGE_CATEGORY,
    payload: data
  }
}


export const setFoodLength = (data) => {
  return {
    type: FOOD_LENGTH,
    payload: data
  }
}
