import { combineReducers } from "redux";
import educationReducer from "./educationReducer";
import skillReducer from "./skillReducer";
import whoReducer from "./whoReducer";

export default combineReducers({
  education: educationReducer,
  skills: skillReducer,
  who: whoReducer
});
