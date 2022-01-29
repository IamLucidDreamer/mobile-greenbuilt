import { combineReducers } from "redux";

import user from "./user";
import authReducer from "./authReducers";

const rootReducer = combineReducers({
  user,
  authReducer,
});

export default rootReducer;
