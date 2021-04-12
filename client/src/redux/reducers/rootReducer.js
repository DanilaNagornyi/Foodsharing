import { combineReducers } from "redux";
import userReducer from "./userReducer";
import foodReducer from "./foodReducer";
import foodLengthReducer from "./foodLengthReducer";
import subscribeReducer from "./subscribeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  food: foodReducer,
  foodLength: foodLengthReducer,
  subscribe: subscribeReducer,
})





export default rootReducer
