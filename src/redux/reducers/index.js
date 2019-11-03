import { combineReducers } from "redux";
import educationReducer from "./educationReducer";
import skillReducer from "./skillReducer";

export default combineReducers({
  education: educationReducer,
  skills: skillReducer
});
