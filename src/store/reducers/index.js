import { combineReducers } from "redux";

import user from "./user";
import authReducer from "./authReducers";
import appReducers from "./appReducers";

const rootReducer = combineReducers({
  user,
  authReducer,
  appReducers,
});

export default rootReducer;
