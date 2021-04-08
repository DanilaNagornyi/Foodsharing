import { ADD_FOOD } from "../types/foodTypes"


function foodReducer(state = {}, action) {
  switch (action.type) {
    case ADD_FOOD:
      return { ...state, food: [...action.payload] }


    default:
      return state
  }

}


export default foodReducer
