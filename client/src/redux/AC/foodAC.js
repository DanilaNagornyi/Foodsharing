import { ADD_FOOD } from "../types/foodTypes"

export const addFood = (data) => {
  return (dispatch, getState) => {
    fetch('http://localhost:3001/food', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(data)
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
