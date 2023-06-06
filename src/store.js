import { combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import userReducer from "./reducers/userReducer";

const store = legacy_createStore(
  combineReducers({
    user: userReducer,
  }),
  composeWithDevTools()
);

export default store;
