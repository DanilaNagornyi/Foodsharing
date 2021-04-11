import { combineReducers } from "redux";
import userReducer from "./userReducer";
import foodReducer from "./foodReducer";
import curPostReducer from "./curPostReducer";
import foodLengthReducer from "./foodLengthReducer";

const rootReducer = combineReducers({
  user: userReducer,
  food: foodReducer,
  foodLength: foodLengthReducer,
})





export default rootReducer
