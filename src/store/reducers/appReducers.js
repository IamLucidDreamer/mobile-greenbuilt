import { SET_LOADER, SET_ERROR } from "../constants/index";

const initialState = {
  loader: false,
  error: {},
};

const appActions = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default appActions;
