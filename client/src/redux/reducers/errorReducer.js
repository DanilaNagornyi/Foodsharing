import { CLEAR_ERROR, SET_ERROR } from "../types/errorTypes";

;

function errorReducer(state = '', action) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload
    case CLEAR_ERROR:
      return ''
    default:
      return state;
  }
}

export default errorReducer;
