import { combineReducers } from "redux";
import educationReducer from "./educationReducer";
import skillReducer from "./skillReducer";
import whoReducer from "./whoReducer";
import githubReducer from "./githubReducer";

export default combineReducers({
  education: educationReducer,
  skills: skillReducer,
  who: whoReducer,
  github: githubReducer
});
