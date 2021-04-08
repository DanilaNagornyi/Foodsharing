import { combineReducers } from "redux";
import userReducer from "./userReducer";
import foodReducer from "./foodReducer";

const rootReducer = combineReducers({
  user: userReducer,
  food: foodReducer
})





export default rootReducer
