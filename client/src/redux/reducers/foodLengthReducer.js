import { FOOD_LENGTH } from "../types/foodTypes"


function foodLengthReducer(state = [], action) {
  switch (action.type) {
    case FOOD_LENGTH:
      return action.payload.categories
    default:
      return state
  }

}


export default foodLengthReducer
