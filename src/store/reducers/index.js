import { combineReducers } from "redux";
import debtReducer from "./debtReducer";
import userReducer from "./userReducer";

export default combineReducers({
  debtReducer,
  userReducer,
});
