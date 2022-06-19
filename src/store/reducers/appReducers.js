import { SET_LOADER, SET_ERROR, UPDATE_POINTS } from "../constants/index";

const initialState = {
  loader: false,
  error: {},
  points: {},
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
    case UPDATE_POINTS:
      return {
        ...state,
        points: action.payload,
      };
    default:
      return state;
  }
};

export default appActions;
