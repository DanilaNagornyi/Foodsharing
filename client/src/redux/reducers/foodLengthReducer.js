import { FOOD_LENGTH } from "../types/foodTypes"


function foodLengthReducer(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case FOOD_LENGTH:
      return action.payload.categories
    default:
      return state
  }

}


export default foodLengthReducer
