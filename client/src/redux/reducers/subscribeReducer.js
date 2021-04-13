import {
  CHANGE_SUBSCRIBE,
  DELETE_SUBSCRIBE,
  GET_SUBCRIBE,
} from "../types/subcribeTypes";

function subscribeReducer(state = [], action) {
  switch (action.type) {
    case DELETE_SUBSCRIBE:
      return state.filter((el) => el !== action.payload);
    case GET_SUBCRIBE:
      return action.payload;
    case CHANGE_SUBSCRIBE:
      return state.includes(action.payload)
        ? state.filter((e) => e !== action.payload)
        : [...state, action.payload];
    default:
      return state;
  }
}

export default subscribeReducer;
