import { ADD_FOOD, GET_ALL_FOOD } from "../types/foodTypes"


function foodReducer(state = {}, action) {
  switch (action.type) {
    case ADD_FOOD:
      return { ...state, food: [...state.food, action.payload] }
    case GET_ALL_FOOD:
      return { ...state, food: action.payload }
    default:
      return state
  }

}


export default foodReducer
