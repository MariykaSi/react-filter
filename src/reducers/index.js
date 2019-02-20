import { combineReducers } from "redux";

import globalReducer from "./global";
import usersReducer from "./users";

const rootReducer = combineReducers({
  global: globalReducer,
  users: usersReducer
});

export default rootReducer;
