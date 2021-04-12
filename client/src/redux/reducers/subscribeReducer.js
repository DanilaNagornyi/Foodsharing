import { ADD_SUBSCRIBE, DELETE_SUBSCRIBE, GET_SUBCRIBE } from "../types/subcribeTypes"


function subscribeReducer(state = [], action) {
  console.log(state);
  switch (action.type) {
    case DELETE_SUBSCRIBE:
      return state.filter(el => el.name !== action.payload)
    case GET_SUBCRIBE:
      return action.payload
    case ADD_SUBSCRIBE:
      return [...state, action.payload]
    default:
      return state
  }

}


export default subscribeReducer
