import { SET_CUR_POST } from "../types/foodTypes"


function curPostReducer(state = {}, action) {
  switch (action.type) {
    case SET_CUR_POST:
      return { ...state, curPost: state.food.find(el => el._id === action.payload) }
    default:
      return state
  }

}


export default curPostReducer
