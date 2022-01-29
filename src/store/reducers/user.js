import { LOGIN, SIGNUP_USER, SIGNUP_BUSINESS } from "../constants/index";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN: {
      return action.payload;
    }
    case SIGNUP_USER: {
      return action.payload;
    }
    case SIGNUP_BUSINESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default userReducer;
