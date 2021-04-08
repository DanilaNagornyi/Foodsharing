import { combineReducers } from "redux";
import userReducer from "./userReducer";
import foodReducer from "./foodReducer";
import curPostReducer from "./curPostReducer";

const rootReducer = combineReducers({
  user: userReducer,
  food: foodReducer,
  curPost: curPostReducer,
})





export default rootReducer
