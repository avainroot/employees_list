import { combineReducers } from "redux";
import employees from "./epmloyees";
import filter from "./filter";

export default combineReducers({ employees, filter });
