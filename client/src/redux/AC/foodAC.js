import { ADD_FOOD, GET_ALL_FOOD, SET_CUR_POST } from "../types/foodTypes"

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
  return {
    type: ADD_FOOD,
    payload: data
  }
}
export const changeCategories = (data) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/products/:${data}`)
      .then(response => response.json())
      .then(response => addFoodToState(response))
  }
}

export const getAllFoodFromServer = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3001/products', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(response => getAllFood(response))
  }
}

export const getAllFood = (data) => {
  return {
    type: GET_ALL_FOOD,
    payload: data
  }
}
